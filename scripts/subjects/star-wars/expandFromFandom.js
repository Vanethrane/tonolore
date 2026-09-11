/**
 * Expand Star Wars from Wookieepedia (starwars.fandom.com).
 *
 * Prefer the tandem expander for future work:
 *   node scripts/expandSubject.js star-wars
 *
 * This script remains for Star Wars–specific category/title overrides.
 *
 * Source: https://starwars.fandom.com/wiki/Main_Page
 *
 *   node scripts/subjects/star-wars/expandFromFandom.js
 *   node scripts/subjects/star-wars/expandFromFandom.js --limit=200
 *   node scripts/subjects/star-wars/expandFromFandom.js --skip-intros
 */

const fs = require("fs");
const path = require("path");
const { slugify } = require("../../lib/wikiClient");
const {
    sleep,
    listCategoryMembers,
    fetchPageIdentities,
    fetchWikitextIntro
} = require("../../lib/fandomClient");

const OUT_PATH = path.join(__dirname, "expanded.json");
const CORE = require("./data");

const WIKI_HOST = "starwars.fandom.com";
const FANDOM_ROOT = "https://starwars.fandom.com/wiki/";

const FAIR_USE = {
    image_license: "fair_use",
    image_usage: "fair_use_identification",
    max_edge_px: 360,
    note:
        "Thumbnails are low-resolution Wookieepedia (Star Wars Fandom) pageimages used only for identification and commentary on an educational fan encyclopedia. Rights remain with Lucasfilm Ltd., Disney, and other holders. Not free or redistributable artwork. Source wiki: https://starwars.fandom.com/wiki/Main_Page"
};

const IMAGE_CREDIT =
    "Fair-use identification thumbnail via Wookieepedia (Star Wars Fandom). Character / franchise art © Lucasfilm Ltd. / Disney (as applicable). Not free or redistributable artwork.";

const BLOCKED_TITLE_RE =
    /^(list of|category:|template:|file:|user:|user blog:|message wall:|thread:|board:|forum:)/i;

const BLOCKED_SLUGS = new Set([
    "",
    "star-wars",
    "main-page",
    "wookieepedia",
    "timeline-of-galactic-history"
]);

const SKIP_NAME_RE =
    /\b(gallery|personality|relationships|history|trivia|behind the scenes|appearances|sources|disambiguation|redirect|concept art)\b/i;

const CORE_FANDOM_TITLES = {
    "star-wars": "Star Wars",
    "george-lucas": "George Lucas",
    lucasfilm: "Lucasfilm",
    disney: "The Walt Disney Company",
    "a-new-hope": "Star Wars: Episode IV A New Hope",
    "the-empire-strikes-back": "Star Wars: Episode V The Empire Strikes Back",
    "return-of-the-jedi": "Star Wars: Episode VI Return of the Jedi",
    "the-phantom-menace": "Star Wars: Episode I The Phantom Menace",
    "attack-of-the-clones": "Star Wars: Episode II Attack of the Clones",
    "revenge-of-the-sith": "Star Wars: Episode III Revenge of the Sith",
    "the-force-awakens": "Star Wars: Episode VII The Force Awakens",
    "the-last-jedi": "Star Wars: Episode VIII The Last Jedi",
    "the-rise-of-skywalker": "Star Wars: Episode IX The Rise of Skywalker",
    "rogue-one": "Rogue One: A Star Wars Story",
    solo: "Solo: A Star Wars Story",
    "luke-skywalker": "Luke Skywalker",
    "leia-organa": "Leia Organa",
    "han-solo": "Han Solo",
    chewbacca: "Chewbacca",
    "obi-wan-kenobi": "Obi-Wan Kenobi",
    yoda: "Yoda",
    "anakin-skywalker": "Anakin Skywalker",
    "darth-vader": "Darth Vader",
    "emperor-palpatine": "Darth Sidious",
    "padme-amidala": "Padmé Amidala",
    rey: "Rey Skywalker",
    "kylo-ren": "Kylo Ren",
    finn: "Finn",
    "poe-dameron": "Poe Dameron",
    "qui-gon-jinn": "Qui-Gon Jinn",
    "darth-maul": "Darth Maul",
    "count-dooku": "Dooku",
    "mace-windu": "Mace Windu",
    "general-grievous": "Grievous",
    "boba-fett": "Boba Fett",
    "jango-fett": "Jango Fett",
    "jabba-the-hutt": "Jabba Desilijic Tiure",
    "r2-d2": "R2-D2",
    "c-3po": "C-3PO",
    "lando-calrissian": "Lando Calrissian",
    "ahsoka-tano": "Ahsoka Tano",
    "din-djarin": "Din Djarin",
    grogu: "Din Grogu",
    "jedi-order": "Jedi Order",
    sith: "Sith",
    "galactic-republic": "Galactic Republic",
    "galactic-empire": "Galactic Empire",
    "rebel-alliance": "Alliance to Restore the Republic",
    separatists: "Confederacy of Independent Systems",
    "first-order": "First Order",
    resistance: "Resistance",
    "clone-troopers": "Clone trooper",
    "the-force": "The Force",
    lightsaber: "Lightsaber",
    "death-star": "Death Star",
    "millennium-falcon": "Millennium Falcon",
    tatooine: "Tatooine",
    alderaan: "Alderaan",
    hoth: "Hoth",
    dagobah: "Dagobah",
    endor: "Endor",
    coruscant: "Coruscant",
    naboo: "Naboo",
    mustafar: "Mustafar",
    jakku: "Jakku",
    exegol: "Exegol",
    mandalore: "Mandalore",
    "clone-wars": "Clone Wars",
    "order-66": "Order 66",
    "battle-of-yavin": "Battle of Yavin",
    "battle-of-endor": "Battle of Endor"
};

const CATEGORIES = [
    { title: "Males", type: "person", parent: "star-wars", maxPages: 2500 },
    { title: "Females", type: "person", parent: "star-wars", maxPages: 1200 },
    {
        title: "Jedi High Council members",
        type: "person",
        parent: "jedi-order",
        includeSubcats: true,
        maxDepth: 1,
        maxPages: 400
    },
    {
        title: "Jedi Generals",
        type: "person",
        parent: "jedi-order",
        maxPages: 400
    },
    {
        title: "Sith Lords",
        type: "person",
        parent: "sith",
        includeSubcats: true,
        maxDepth: 1,
        maxPages: 400
    },
    {
        title: "Planets",
        type: "place",
        parent: "star-wars",
        includeSubcats: true,
        maxDepth: 1,
        maxPages: 800
    },
    {
        title: "Starships",
        type: "object",
        parent: "star-wars",
        includeSubcats: true,
        maxDepth: 1,
        maxPages: 600
    },
    {
        title: "Organizations",
        type: "organization",
        parent: "star-wars",
        includeSubcats: true,
        maxDepth: 1,
        maxPages: 500
    },
    {
        title: "Weapons",
        type: "object",
        kind: "weapon",
        parent: "star-wars",
        includeSubcats: true,
        maxDepth: 1,
        maxPages: 400
    },
    {
        title: "Force powers",
        type: "concept",
        parent: "the-force",
        maxPages: 300
    },
    {
        title: "Battles",
        type: "event",
        parent: "star-wars",
        includeSubcats: true,
        maxDepth: 1,
        maxPages: 400
    }
];

function parseArgs(argv) {
    const opts = {
        limit: null,
        // Rich intros ON by default — pass --skip-intros only for dry crawls.
        skipIntros: false,
        delayMs: 110,
        batchSize: 40
    };

    for (const arg of argv) {
        if (arg === "--skip-intros") {
            opts.skipIntros = true;
        } else if (arg === "--with-intros") {
            // Legacy no-op: intros are always on unless --skip-intros.
            opts.skipIntros = false;
        } else if (arg.startsWith("--limit=")) {
            opts.limit = Number(arg.slice("--limit=".length)) || null;
        } else if (arg.startsWith("--delay=")) {
            opts.delayMs = Number(arg.slice("--delay=".length)) || 110;
        }
    }

    return opts;
}

function loadExistingExpanded() {
    if (!fs.existsSync(OUT_PATH)) {
        return {
            enrichments: [],
            entities: [],
            relationships: [],
            fair_use_policy: FAIR_USE
        };
    }

    return JSON.parse(fs.readFileSync(OUT_PATH, "utf8"));
}

function pickUniqueSlug(name, used) {
    const base = slugify(name);
    if (!base || BLOCKED_SLUGS.has(base)) {
        return null;
    }

    if (!used.has(base)) {
        return base;
    }

    for (let i = 2; i < 40; i += 1) {
        const candidate = `${base}-${i}`;
        if (!used.has(candidate)) {
            return candidate;
        }
    }

    return null;
}

function entityScore(entity) {
    let score = 0;
    if (entity.image_url) {
        score += 4;
    }
    if (entity.description && entity.description.length > 60) {
        score += 2;
    }
    if (!/-\d+$/.test(entity.slug)) {
        score += 1;
    }
    return score;
}

function dedupeExpandedEntities(entities) {
    const nonFandom = [];
    const byTitle = new Map();

    for (const entity of entities || []) {
        const title = entity.metadata?.fandom_title;
        if (!title) {
            nonFandom.push(entity);
            continue;
        }

        const prev = byTitle.get(title);
        if (!prev || entityScore(entity) > entityScore(prev)) {
            byTitle.set(title, entity);
        }
    }

    return [...nonFandom, ...byTitle.values()];
}

function titleToSlugCandidates(title) {
    const cleaned = title
        .replace(/\s*\([^)]*\)\s*$/, "")
        .replace(/\s+/g, " ")
        .trim();
    return [slugify(title), slugify(cleaned)].filter(Boolean);
}

function buildCoreTitleIndex() {
    const bySlug = new Map();
    const byNormName = new Map();

    for (const entity of CORE.entities) {
        bySlug.set(entity.slug, entity);
        byNormName.set(entity.name.toLowerCase(), entity.slug);
        for (const alias of entity.aliases || []) {
            byNormName.set(String(alias).toLowerCase(), entity.slug);
        }
    }

    for (const [slug, title] of Object.entries(CORE_FANDOM_TITLES)) {
        byNormName.set(title.toLowerCase(), slug);
    }

    return { bySlug, byNormName };
}

function shouldSkipTitle(title) {
    if (!title || BLOCKED_TITLE_RE.test(title)) {
        return true;
    }
    if (title.includes("/")) {
        return true;
    }
    if (SKIP_NAME_RE.test(title)) {
        return true;
    }
    if (/^["'].*["']$/.test(title) && title.length < 20) {
        // Callsign-only pages like "Backdraft"
        return true;
    }
    return false;
}

function normalizeThumbUrl(url) {
    if (!url) {
        return url;
    }

    return String(url).replace(
        /\/scale-to-width-down\/\d+/i,
        "/scale-to-width-down/360"
    );
}

function chunk(arr, size) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) {
        out.push(arr.slice(i, i + size));
    }
    return out;
}

function imageFields(identity, title) {
    if (!identity?.thumbnail) {
        return {};
    }

    return {
        image_url: normalizeThumbUrl(identity.thumbnail),
        image_source:
            identity.fullurl ||
            `${FANDOM_ROOT}${encodeURIComponent(title.replace(/ /g, "_"))}`,
        image_credit: IMAGE_CREDIT,
        image_license: "fair_use",
        image_usage: "fair_use_identification",
        image_alt: `Identification thumbnail for ${title}`
    };
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));
    console.log("Star Wars Fandom expand starting…", opts);

    const existing = loadExistingExpanded();
    existing.entities = dedupeExpandedEntities(existing.entities);
    const { bySlug, byNormName } = buildCoreTitleIndex();

    const usedSlugs = new Set([
        ...CORE.entities.map((e) => e.slug),
        ...(existing.entities || []).map((e) => e.slug)
    ]);

    const existingByFandomTitle = new Map();
    for (const entity of existing.entities || []) {
        const title = entity.metadata?.fandom_title;
        if (title) {
            existingByFandomTitle.set(title, entity.slug);
        }
    }

    const pageMeta = new Map();

    for (const cat of CATEGORIES) {
        console.log(`Listing Category:${cat.title}…`);
        const members = await listCategoryMembers(WIKI_HOST, cat.title, {
            maxPages: Math.min(
                cat.maxPages || 8000,
                opts.limit || cat.maxPages || 8000
            ),
            delayMs: opts.delayMs,
            pageOnly: !cat.includeSubcats,
            includeSubcats: Boolean(cat.includeSubcats),
            maxDepth: cat.maxDepth || 1
        });

        for (const member of members) {
            if (shouldSkipTitle(member.title)) {
                continue;
            }

            const prev = pageMeta.get(member.title);
            if (!prev) {
                pageMeta.set(member.title, {
                    title: member.title,
                    type: cat.type,
                    parentSlug: cat.parent
                });
            } else if (prev.type !== "person" && cat.type === "person") {
                prev.type = "person";
                prev.parentSlug = cat.parent;
            }
        }

        console.log(
            `  +${members.length} raw → ${pageMeta.size} unique titles so far`
        );

        if (opts.limit && pageMeta.size >= opts.limit) {
            break;
        }
    }

    for (const [slug, title] of Object.entries(CORE_FANDOM_TITLES)) {
        if (!pageMeta.has(title) && !shouldSkipTitle(title)) {
            const entity = bySlug.get(slug);
            pageMeta.set(title, {
                title,
                type: entity?.type || "person",
                parentSlug: entity?.parentSlug || "star-wars",
                forceCoreSlug: slug
            });
        }
    }

    let titles = [...pageMeta.keys()];
    if (opts.limit) {
        titles = titles.slice(0, opts.limit);
    }

    console.log(`Fetching identities for ${titles.length} pages…`);

    const identities = new Map();
    for (const batch of chunk(titles, opts.batchSize)) {
        try {
            const map = await fetchPageIdentities(WIKI_HOST, batch, 360);
            for (const [k, v] of map) {
                identities.set(k, v);
            }
        } catch (error) {
            console.warn("identity batch failed:", error.message);
            await sleep(1500);
        }
        await sleep(opts.delayMs);
    }

    const enrichmentBySlug = new Map(
        (existing.enrichments || []).map((row) => [row.slug, { ...row }])
    );
    const entityBySlug = new Map(
        (existing.entities || []).map((row) => [row.slug, { ...row }])
    );

    let enriched = 0;
    let created = 0;
    let withImages = 0;
    let withIntros = 0;
    let processed = 0;

    for (const title of titles) {
        processed += 1;
        const meta = pageMeta.get(title);
        const identity = identities.get(title) || null;
        const imgs = imageFields(identity, identity?.title || title);

        const fandomUrl =
            identity?.fullurl ||
            `${FANDOM_ROOT}${title.replace(/ /g, "_")}`;

        let coreSlug = meta.forceCoreSlug || null;
        if (!coreSlug) {
            for (const cand of titleToSlugCandidates(title)) {
                if (bySlug.has(cand)) {
                    coreSlug = cand;
                    break;
                }
            }
        }
        if (!coreSlug) {
            coreSlug = byNormName.get(title.toLowerCase()) || null;
        }
        if (!coreSlug && identity?.title) {
            coreSlug = byNormName.get(identity.title.toLowerCase()) || null;
        }
        if (!coreSlug) {
            const cleaned = title.replace(/\s*\([^)]*\)\s*$/, "").trim();
            coreSlug = byNormName.get(cleaned.toLowerCase()) || null;
        }

        // Redirect targets: Darth Vader → Anakin Skywalker still enrichs both cores if mapped
        if (!coreSlug && identity?.title) {
            for (const cand of titleToSlugCandidates(identity.title)) {
                if (bySlug.has(cand)) {
                    coreSlug = cand;
                    break;
                }
            }
        }

        let intro = null;
        const wantIntro = !opts.skipIntros;
        if (wantIntro) {
            try {
                intro = await fetchWikitextIntro(
                    WIKI_HOST,
                    identity?.title || title,
                    3200
                );
            } catch (error) {
                if (/429/.test(error.message)) {
                    console.warn("rate limited; backing off…");
                    await sleep(4000);
                    try {
                        intro = await fetchWikitextIntro(
                            WIKI_HOST,
                            identity?.title || title,
                            3200
                        );
                    } catch (_) {
                        intro = null;
                    }
                }
            }
            await sleep(opts.delayMs);
        }

        if (imgs.image_url) {
            withImages += 1;
        }
        if (intro) {
            withIntros += 1;
        }

        const patchMeta = {
            fandom_url: fandomUrl,
            fandom_title: identity?.title || title,
            source: "starwars.fandom"
        };

        if (coreSlug) {
            const prev = enrichmentBySlug.get(coreSlug) || { slug: coreSlug };
            const preferFandomImage = Boolean(imgs.image_url);

            const nextDesc = intro
                ? !prev.description ||
                  intro.length >= Math.min(prev.description.length, 200)
                    ? intro
                    : prev.description
                : prev.description;

            enrichmentBySlug.set(coreSlug, {
                ...prev,
                slug: coreSlug,
                description: nextDesc,
                ...(preferFandomImage ? imgs : {}),
                wikipedia_url: prev.wikipedia_url,
                metadata: {
                    ...(prev.metadata || {}),
                    ...patchMeta,
                    fandom_preferred_image: preferFandomImage || undefined
                }
            });
            enriched += 1;
        } else {
            const existingSlug =
                existingByFandomTitle.get(title) ||
                existingByFandomTitle.get(identity?.title) ||
                [...titleToSlugCandidates(title)].find((cand) =>
                    entityBySlug.has(cand)
                ) ||
                null;

            const slug = existingSlug || pickUniqueSlug(title, usedSlugs);
            if (!slug) {
                continue;
            }

            const prev = entityBySlug.get(slug) || null;
            usedSlugs.add(slug);
            existingByFandomTitle.set(title, slug);
            if (identity?.title) {
                existingByFandomTitle.set(identity.title, slug);
            }

            entityBySlug.set(slug, {
                ...(prev || {}),
                slug,
                name:
                    (prev && prev.name) ||
                    (identity?.title || title)
                        .replace(/\s*\([^)]*\)\s*$/, "")
                        .trim() ||
                    title,
                type: meta.type || prev?.type || "topic",
                description: (() => {
                    const prevDesc = prev?.description || "";
                    const prevIsStub =
                        !prevDesc ||
                        /documented on wookieepedia/i.test(prevDesc) ||
                        /is documented on .+\.fandom\.com/i.test(prevDesc);
                    return intro || (prevIsStub ? "" : prevDesc) || "";
                })(),
                short_description:
                    prev?.short_description ||
                    (intro
                        ? `${intro
                              .split(/\n\n+/)[0]
                              .slice(0, 220)
                              .replace(/\s+\S*$/, "")}${
                              intro.split(/\n\n+/)[0].length > 220 ? "…" : ""
                          }`
                        : undefined),
                evidence: "fiction",
                parentSlug: meta.parentSlug || prev?.parentSlug || "star-wars",
                ...imgs,
                metadata: {
                    ...(prev?.metadata || {}),
                    canon: false,
                    discovered: true,
                    ...patchMeta
                }
            });
            if (!prev) {
                created += 1;
            }
        }

        if (processed % 100 === 0) {
            console.log(
                `  progress ${processed}/${titles.length} (enriched ${enriched}, new ${created}, images ${withImages})`
            );
        }
    }

    // Darth Vader shares Anakin's page — copy enrichment image/desc if missing
    const anakin = enrichmentBySlug.get("anakin-skywalker");
    const vader = enrichmentBySlug.get("darth-vader");
    if (anakin && (!vader || !vader.image_url)) {
        enrichmentBySlug.set("darth-vader", {
            ...(vader || { slug: "darth-vader" }),
            slug: "darth-vader",
            description:
                (vader && vader.description) ||
                anakin.description ||
                undefined,
            ...(anakin.image_url
                ? {
                      image_url: anakin.image_url,
                      image_source: anakin.image_source,
                      image_credit: anakin.image_credit,
                      image_license: anakin.image_license,
                      image_usage: anakin.image_usage,
                      image_alt: "Identification thumbnail for Darth Vader"
                  }
                : {}),
            metadata: {
                ...((vader && vader.metadata) || {}),
                fandom_url:
                    "https://starwars.fandom.com/wiki/Darth_Vader",
                fandom_title: "Darth Vader",
                source: "starwars.fandom",
                fandom_redirects_to: "Anakin Skywalker"
            }
        });
    }

    const allowedSlugs = new Set([
        ...CORE.entities.map((entity) => entity.slug),
        ...entityBySlug.keys()
    ]);

    const relationships = (existing.relationships || [])
        .map((row) => {
            if (!Array.isArray(row) || row.length < 2) {
                return null;
            }
            return [
                row[0],
                row[1],
                row[2] || "part_of",
                row[3] || "Part of",
                row[4] || 0.9,
                row[5] || 0.85
            ];
        })
        .filter(
            (row) => row && allowedSlugs.has(row[0]) && allowedSlugs.has(row[1])
        );

    const relKeys = new Set(
        relationships.map(([a, b]) => `${a}::${b}`)
    );

    for (const entity of entityBySlug.values()) {
        const parent = entity.parentSlug || "star-wars";
        const key = `${entity.slug}::${parent}`;
        if (!relKeys.has(key) && allowedSlugs.has(parent)) {
            relationships.push([
                entity.slug,
                parent,
                "part_of",
                "Part of",
                0.9,
                0.85
            ]);
            relKeys.add(key);
        }
    }

    const out = {
        generated_at: new Date().toISOString(),
        source: {
            wiki: `${FANDOM_ROOT}Main_Page`,
            host: WIKI_HOST
        },
        fair_use_policy: FAIR_USE,
        enrichments: [...enrichmentBySlug.values()],
        entities: [...entityBySlug.values()],
        relationships
    };

    fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2));
    console.log("Wrote", OUT_PATH);
    console.log(
        JSON.stringify(
            {
                titles: titles.length,
                enrichments: out.enrichments.length,
                entities: out.entities.length,
                relationships: out.relationships.length,
                enrichedCore: enriched,
                created,
                withImages,
                withIntros
            },
            null,
            2
        )
    );
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
