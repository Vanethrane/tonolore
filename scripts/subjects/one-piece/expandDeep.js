/**
 * Expand One Piece from Wikidata narrative universe + Wikipedia
 * fair-use identification thumbnails (only where an enwiki article exists).
 *
 * Fair use: ≤360px Wikipedia pageimages, identification/commentary only,
 * credited, marked fair_use — not free artwork.
 *
 *   node scripts/subjects/one-piece/expandDeep.js
 */

const fs = require("fs");
const path = require("path");
const {
    sparql,
    wikipediaQuery,
    mapWikiType,
    slugify,
    sleep
} = require("../../lib/wikiClient");

const OUT_PATH = path.join(__dirname, "expanded.json");
const CORE = require("./data");
const ONE_PIECE_UNIVERSE = "Q16682047";

const BLOCKED_SLUGS = new Set([
    "",
    "one-piece",
    "list-of-one-piece-characters",
    "list-of-one-piece-episodes",
    "list-of-one-piece-media",
    "one-piece-chapter-list",
    "one-piece-universe"
]);

const BLOCKED_NAME_RE =
    /^(list of|category:|template:|wikipedia:|file:)/i;

const CORE_TITLE_OVERRIDES = {
    nami: "Nami (One Piece)",
    franky: "Franky (One Piece)",
    brook: "Brook (One Piece)",
    usopp: "Usopp",
    sanji: "Sanji (One Piece)",
    jinbe: "Jimbei",
    shanks: "Shanks",
    "monkey-d-luffy": "Monkey D. Luffy",
    "roronoa-zoro": "Roronoa Zoro",
    "nico-robin": "Nico Robin",
    "tony-tony-chopper": "Tony Tony Chopper",
    "one-piece-anime": "One Piece",
    "one-piece-manga": "One Piece",
    "gol-d-roger": "Gol D. Roger",
    "portgas-d-ace": "Portgas D. Ace",
    "marshall-d-teach": "Marshall D. Teach",
    whitebeard: "Edward Newgate",
    "big-mom": "Charlotte Linlin",
    "dr-vegapunk": "Vegapunk",
    "boa-hancock": "Boa Hancock",
    "trafalgar-law": "Trafalgar D. Water Law",
    "eustass-kid": "Eustass Kid",
    crocodile: "Crocodile (One Piece)",
    "donquixote-doflamingo": "Donquixote Doflamingo",
    "bartholomew-kuma": "Bartholomew Kuma",
    bonney: "Jewelry Bonney",
    "nefertari-vivi": "Nefertari Vivi",
    "silvers-rayleigh": "Silvers Rayleigh",
    "monkey-d-garp": "Monkey D. Garp",
    "monkey-d-dragon": "Monkey D. Dragon",
    sabo: "Sabo (One Piece)",
    "straw-hat-pirates": "Straw Hat Pirates",
    "world-government": "World Government (One Piece)",
    "void-century": "Void Century",
    "eiichiro-oda": "Eiichiro Oda",
    "weekly-shonen-jump": "Weekly Shōnen Jump",
    shueisha: "Shueisha",
    "toei-animation": "Toei Animation",
    netflix: "Netflix"
};

function existingSlugSet() {
    return new Set(CORE.entities.map((entity) => entity.slug));
}

function existingNameSet() {
    const names = new Set();

    for (const entity of CORE.entities) {
        names.add(entity.name.toLowerCase());
        for (const alias of entity.aliases || []) {
            names.add(String(alias).toLowerCase());
        }
    }

    return names;
}

function pickUniqueSlug(name, used) {
    const base = slugify(name);

    if (!base || BLOCKED_SLUGS.has(base)) {
        return null;
    }

    if (!used.has(base)) {
        return base;
    }

    for (let i = 2; i < 30; i += 1) {
        const candidate = `${base}-${i}`;
        if (!used.has(candidate)) {
            return candidate;
        }
    }

    return null;
}

function pageToIdentity(page) {
    if (!page || page.missing != null) {
        return null;
    }

    const thumbnail = page.thumbnail || null;
    const wikipedia_url =
        page.fullurl ||
        `https://en.wikipedia.org/wiki/${encodeURIComponent(
            page.title.replace(/ /g, "_")
        )}`;

    return {
        title: page.title,
        pageid: page.pageid,
        wikipedia_url,
        extract: page.extract || "",
        image: thumbnail
            ? {
                  image_url: thumbnail.source,
                  image_source: wikipedia_url,
                  image_credit:
                      "Fair-use identification thumbnail via Wikipedia. Character / franchise art © Eiichiro Oda / Shueisha / Toei Animation (as applicable). Not free or redistributable artwork.",
                  image_license: "fair_use",
                  image_usage: "fair_use_identification",
                  image_alt: `Identification thumbnail for ${page.title}`
              }
            : null
    };
}

function titlesAlign(requested, resolvedTitle) {
    const a = slugify(String(requested || "").replace(/\(one piece\)/i, ""));
    const b = slugify(String(resolvedTitle || "").replace(/\(one piece\)/i, ""));

    if (!a || !b) {
        return false;
    }

    if (a === b) {
        return true;
    }

    // Allow "charlotte-linlin" ↔ "big-mom" style only via explicit overrides,
    // not fuzzy redirects to a different topic.
    if (b.includes(a) || a.includes(b)) {
        return a.length >= 4 && b.length >= 4;
    }

    return false;
}

function isRelevantOnePiecePage(identity, expectedName = "") {
    if (!identity) {
        return false;
    }

    const hay = `${identity.title}\n${identity.extract}`.toLowerCase();

    if (
        !/one piece|eiichiro oda|straw hat|grand line|devil fruit|shonen jump|shōnen jump|shueisha|toei animation/.test(
            hay
        ) &&
        !/^(eiichiro oda|shueisha|toei animation|weekly shōnen jump|weekly shonen jump|netflix)$/i.test(
            identity.title
        )
    ) {
        return false;
    }

    if (expectedName && !titlesAlign(expectedName, identity.title)) {
        // Still allow exact disambiguation pages for the same person.
        if (!titlesAlign(`${expectedName} (One Piece)`, identity.title)) {
            return false;
        }
    }

    return true;
}

async function fetchPagesByTitles(titles) {
    const unique = [...new Set(titles.filter(Boolean))];
    const byTitle = new Map();

    for (let i = 0; i < unique.length; i += 15) {
        const chunk = unique.slice(i, i + 15);
        let attempt = 0;
        let data = null;

        while (attempt < 5) {
            try {
                data = await wikipediaQuery({
                    titles: chunk.join("|"),
                    prop: "pageimages|extracts|info",
                    inprop: "url",
                    pithumbsize: "360",
                    piprop: "thumbnail|name",
                    exintro: "1",
                    explaintext: "1",
                    redirects: "1",
                    exlimit: "15"
                });
                break;
            } catch (error) {
                attempt += 1;
                const wait = 1500 * attempt;
                console.warn(
                    `\nRetry ${attempt} after error: ${error.message.slice(0, 80)}`
                );
                await sleep(wait);
            }
        }

        if (!data) {
            continue;
        }

        const pages = Object.values(data.query?.pages || {});
        const normalized = data.query?.normalized || [];
        const redirects = data.query?.redirects || [];
        const aliasToCanonical = new Map();

        for (const row of normalized) {
            aliasToCanonical.set(row.from, row.to);
        }

        for (const row of redirects) {
            aliasToCanonical.set(row.from, row.to);
        }

        for (const page of pages) {
            const identity = pageToIdentity(page);
            if (identity) {
                byTitle.set(page.title, identity);
            }
        }

        for (const title of chunk) {
            let canonical = title;
            if (aliasToCanonical.has(canonical)) {
                canonical = aliasToCanonical.get(canonical);
            }
            if (aliasToCanonical.has(canonical)) {
                canonical = aliasToCanonical.get(canonical);
            }

            if (!byTitle.has(title) && byTitle.has(canonical)) {
                byTitle.set(title, byTitle.get(canonical));
            }
        }

        process.stdout.write(".");
        await sleep(400);
    }

    console.log("");
    return byTitle;
}

async function discoverUniverseItems() {
    const query = `
SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
  ?item wdt:P1080 wd:${ONE_PIECE_UNIVERSE} .
  OPTIONAL { ?item wdt:P31 ?type . }
  OPTIONAL {
    ?article schema:about ?item ;
             schema:isPartOf <https://en.wikipedia.org/> ;
             schema:name ?enwiki .
  }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
LIMIT 2000
`;

    const data = await sparql(query);
    const rows = data.results?.bindings || [];
    const byId = new Map();

    for (const row of rows) {
        const id = row.item.value.replace(
            "http://www.wikidata.org/entity/",
            ""
        );

        if (byId.has(id)) {
            continue;
        }

        byId.set(id, {
            wikidata_id: id,
            name: row.itemLabel?.value || "",
            description: row.itemDescription?.value || "",
            typeLabel: row.typeLabel?.value || "",
            enwiki: row.enwiki?.value || null
        });
    }

    return [...byId.values()];
}

async function main() {
    console.log("Discovering One Piece universe from Wikidata…");
    const discovered = await discoverUniverseItems();
    console.log(`Unique Wikidata items: ${discovered.length}`);

    const usedSlugs = existingSlugSet();
    const knownNames = existingNameSet();

    const coreLookups = CORE.entities.map((entity) => ({
        kind: "core",
        slug: entity.slug,
        name: entity.name,
        preferredTitle: CORE_TITLE_OVERRIDES[entity.slug] || entity.name
    }));

    const discoveredLookups = [];

    for (const item of discovered) {
        if (!item.name || BLOCKED_NAME_RE.test(item.name)) {
            continue;
        }

        if (/^Q\d+$/i.test(item.name)) {
            continue;
        }

        if (knownNames.has(item.name.toLowerCase())) {
            continue;
        }

        const slug = pickUniqueSlug(item.name, usedSlugs);
        if (!slug) {
            continue;
        }

        usedSlugs.add(slug);
        knownNames.add(item.name.toLowerCase());

        discoveredLookups.push({
            kind: "discovered",
            slug,
            item,
            // Only attach Wikipedia media when Wikidata already links an article.
            preferredTitle: item.enwiki || null
        });
    }

    console.log(
        `Lookups: ${coreLookups.length} core, ${discoveredLookups.length} new (${discoveredLookups.filter((row) => row.preferredTitle).length} with enwiki)`
    );

    const titles = [...coreLookups, ...discoveredLookups]
        .map((row) => row.preferredTitle)
        .filter(Boolean);

    console.log(`Fetching ${titles.length} Wikipedia pages (fair-use thumbs)…`);
    await sleep(2000);
    const pageMap = await fetchPagesByTitles(titles);

    const enrichments = [];
    let withImages = 0;

    for (const lookup of coreLookups) {
        const identity =
            pageMap.get(lookup.preferredTitle) ||
            pageMap.get(lookup.name);

        if (!identity || !isRelevantOnePiecePage(identity, lookup.name)) {
            continue;
        }

        const enrichment = {
            slug: lookup.slug,
            wikipedia_url: identity.wikipedia_url
        };

        // Only attach image when the article itself is clearly on-topic.
        if (identity.image) {
            Object.assign(enrichment, identity.image);
            withImages += 1;
        }

        const core = CORE.entities.find((entity) => entity.slug === lookup.slug);

        if (
            identity.extract &&
            (!core?.description || core.description.length < 140)
        ) {
            enrichment.description = identity.extract.slice(0, 1400);
        }

        enrichments.push(enrichment);
    }

    const expandedEntities = [];
    const expandedRels = [];

    for (const lookup of discoveredLookups) {
        let identity = lookup.preferredTitle
            ? pageMap.get(lookup.preferredTitle)
            : null;

        if (identity && !isRelevantOnePiecePage(identity, lookup.item.name)) {
            identity = null;
        }

        const item = lookup.item;
        const type = mapWikiType(
            item.typeLabel,
            item.description || identity?.extract || ""
        );

        const short =
            item.description ||
            identity?.extract?.slice(0, 180) ||
            `${item.name} is part of the One Piece world.`;

        const description =
            identity?.extract?.slice(0, 1400) ||
            `${item.name} appears in the One Piece universe. ${item.description || ""}`.trim();

        const entity = {
            slug: lookup.slug,
            name: item.name,
            type,
            evidence: "fiction",
            short_description: short.slice(0, 280),
            description,
            aliases: [item.name],
            parentSlug: "one-piece",
            wikidata_id: item.wikidata_id,
            wikipedia_url: identity?.wikipedia_url || null,
            metadata: {
                source: "wikidata+wikipedia",
                discovered: true
            },
            ...(identity?.image || {})
        };

        if (identity?.image) {
            withImages += 1;
        }

        expandedEntities.push(entity);
        expandedRels.push([
            entity.slug,
            "one-piece",
            "part_of",
            `${entity.name} is part of the One Piece subject graph.`,
            0.9,
            0.85
        ]);
    }

    const payload = {
        generated_at: new Date().toISOString(),
        fair_use_policy: {
            image_license: "fair_use",
            image_usage: "fair_use_identification",
            max_edge_px: 360,
            note:
                "Thumbnails are low-resolution Wikipedia pageimages used only for identification and commentary on an educational fan encyclopedia. Rights remain with Eiichiro Oda, Shueisha, Toei Animation, and other holders. Not free or redistributable artwork."
        },
        enrichments,
        entities: expandedEntities,
        relationships: expandedRels,
        stats: {
            discovered_wikidata: discovered.length,
            new_entities: expandedEntities.length,
            images_attached: withImages,
            core_enrichments: enrichments.length,
            enwiki_pages_fetched: titles.length
        }
    };

    fs.writeFileSync(OUT_PATH, JSON.stringify(payload, null, 2), "utf8");
    console.log("Wrote", OUT_PATH);
    console.log(payload.stats);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
