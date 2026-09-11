/**
 * Expand One Piece from the One Piece Fandom Wiki.
 *
 * Prefer the tandem expander for future work:
 *   node scripts/expandSubject.js one-piece
 *
 * This script remains for One Piece–specific category/title overrides.
 *
 * Source: https://onepiece.fandom.com/wiki/One_Piece_Wiki
 *
 *   node scripts/subjects/one-piece/expandFromFandom.js
 *   node scripts/subjects/one-piece/expandFromFandom.js --limit=200
 *   node scripts/subjects/one-piece/expandFromFandom.js --skip-intros
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

const WIKI_HOST = "onepiece.fandom.com";
const FANDOM_ROOT = "https://onepiece.fandom.com/wiki/";

const FAIR_USE = {
    image_license: "fair_use",
    image_usage: "fair_use_identification",
    max_edge_px: 360,
    note:
        "Thumbnails are low-resolution One Piece Fandom / Wikipedia pageimages used only for identification and commentary on an educational fan encyclopedia. Rights remain with Eiichiro Oda, Shueisha, Toei Animation, and other holders. Not free or redistributable artwork. Source wiki: https://onepiece.fandom.com/wiki/One_Piece_Wiki"
};

const IMAGE_CREDIT =
    "Fair-use identification thumbnail via One Piece Fandom Wiki. Character / franchise art © Eiichiro Oda / Shueisha / Toei Animation (as applicable). Not free or redistributable artwork.";

const BLOCKED_TITLE_RE =
    /^(list of|category:|template:|file:|user:|user blog:|message wall:|thread:|board:|forum:)/i;

const BLOCKED_SLUGS = new Set([
    "",
    "one-piece",
    "main-page",
    "one-piece-wiki",
    "devil-fruit",
    "akuma-no-mi",
    "list-of-locations",
    "blue-planet",
    "blue-sea"
]);

const SKIP_NAME_RE =
    /\b(gallery|personality|relationships|history|trivia|battles|other media|misc\.?|non-canon|disambiguation|redirect)\b/i;

/** Map core slugs → Fandom page titles when names differ. */
const CORE_FANDOM_TITLES = {
    "monkey-d-luffy": "Monkey D. Luffy",
    "roronoa-zoro": "Roronoa Zoro",
    nami: "Nami",
    usopp: "Usopp",
    sanji: "Sanji",
    "tony-tony-chopper": "Tony Tony Chopper",
    "nico-robin": "Nico Robin",
    franky: "Franky",
    brook: "Brook",
    jinbe: "Jinbe",
    "gol-d-roger": "Gol D. Roger",
    "silvers-rayleigh": "Silvers Rayleigh",
    whitebeard: "Edward Newgate",
    "portgas-d-ace": "Portgas D. Ace",
    "monkey-d-dragon": "Monkey D. Dragon",
    "monkey-d-garp": "Monkey D. Garp",
    "marshall-d-teach": "Marshall D. Teach",
    "donquixote-doflamingo": "Donquixote Doflamingo",
    "dr-vegapunk": "Vegapunk",
    "kozuki-oden": "Kozuki Oden",
    "nefertari-vivi": "Nefertari Vivi",
    "nefertari-d-lili": "Nefertari D. Lili",
    "bartholomew-kuma": "Bartholomew Kuma",
    bonney: "Jewelry Bonney",
    "kozuki-momonosuke": "Kozuki Momonosuke",
    "laugh-tale": "Laugh Tale",
    "straw-hat-pirates": "Straw Hat Pirates",
    "world-government": "World Government",
    "void-century": "Void Century",
    "big-mom": "Charlotte Linlin",
    kaido: "Kaido",
    "trafalgar-law": "Trafalgar D. Water Law",
    "eustass-kid": "Eustass Kid",
    "boa-hancock": "Boa Hancock",
    crocodile: "Crocodile",
    shanks: "Shanks",
    sabo: "Sabo",
    "buggy-the-clown": "Buggy",
    imu: "Nerona Imu",
    "thousand-sunny": "Thousand Sunny",
    "going-merry": "Going Merry",
    "gum-gum-fruit": "Gomu Gomu no Mi",
    "eiichiro-oda": "Eiichiro Oda",
    "one-piece-manga": "One Piece",
    "one-piece-anime": "One Piece (Anime)"
};

const CATEGORIES = [
    { title: "Male Characters", type: "person", parent: "one-piece" },
    { title: "Female Characters", type: "person", parent: "one-piece" },
    {
        title: "Devil Fruits",
        type: "object",
        parent: "one-piece",
        includeSubcats: true,
        maxDepth: 2
    },
    {
        title: "Paramecia",
        type: "object",
        parent: "one-piece",
        includeSubcats: true,
        maxDepth: 1
    },
    {
        title: "Zoan",
        type: "object",
        parent: "one-piece",
        includeSubcats: true,
        maxDepth: 1
    },
    {
        title: "Logia",
        type: "object",
        parent: "one-piece",
        includeSubcats: true,
        maxDepth: 1
    },
    {
        title: "Locations",
        type: "place",
        parent: "one-piece",
        includeSubcats: true,
        maxDepth: 2
    },
    {
        title: "Islands",
        type: "place",
        parent: "one-piece",
        includeSubcats: true,
        maxDepth: 2
    },
    { title: "Pirates", type: "person", parent: "one-piece" },
    { title: "Marines", type: "person", parent: "one-piece" },
    {
        title: "Ships",
        type: "object",
        parent: "one-piece",
        includeSubcats: true,
        maxDepth: 1
    },
    {
        title: "Straw Hat Pirates Members",
        type: "person",
        parent: "straw-hat-pirates"
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

/** Drop duplicate Fandom rows created by earlier re-runs (-2 slugs). */
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
        image_source: identity.fullurl || `${FANDOM_ROOT}${encodeURIComponent(title.replace(/ /g, "_"))}`,
        image_credit: IMAGE_CREDIT,
        image_license: "fair_use",
        image_usage: "fair_use_identification",
        image_alt: `Identification thumbnail for ${title}`
    };
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));
    console.log("One Piece Fandom expand starting…", opts);

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
            maxPages: opts.limit || 8000,
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

    // Always include core overrides even if category crawl missed them.
    for (const [slug, title] of Object.entries(CORE_FANDOM_TITLES)) {
        if (!pageMeta.has(title) && !shouldSkipTitle(title)) {
            const entity = bySlug.get(slug);
            pageMeta.set(title, {
                title,
                type: entity?.type || "person",
                parentSlug: entity?.parentSlug || "one-piece",
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
        const imgs = imageFields(identity, title);

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
        if (!coreSlug) {
            const cleaned = title.replace(/\s*\([^)]*\)\s*$/, "").trim();
            coreSlug = byNormName.get(cleaned.toLowerCase()) || null;
        }

        let intro = null;
        const wantIntro = !opts.skipIntros;
        if (wantIntro) {
            try {
                intro = await fetchWikitextIntro(WIKI_HOST, title, 3200);
            } catch (error) {
                if (/429/.test(error.message)) {
                    console.warn("rate limited; backing off…");
                    await sleep(4000);
                    try {
                        intro = await fetchWikitextIntro(
                            WIKI_HOST,
                            title,
                            3200
                        );
                    } catch (_) {
                        intro = null;
                    }
                }
            }
            await sleep(opts.delayMs);
        }

        const patch = {
            ...(intro ? { description: intro } : {}),
            ...imgs,
            metadata: {
                fandom_url: fandomUrl,
                fandom_title: title,
                source: "onepiece.fandom"
            }
        };

        if (imgs.image_url) {
            withImages += 1;
        }
        if (intro) {
            withIntros += 1;
        }

        if (coreSlug) {
            const prev = enrichmentBySlug.get(coreSlug) || { slug: coreSlug };
            const preferFandomImage =
                Boolean(imgs.image_url) &&
                (!prev.image_url ||
                    String(prev.image_source || "").includes("wikipedia.org") ||
                    String(prev.image_url || "").includes("wikimedia.org") ||
                    prev.metadata?.source === "onepiece.fandom");

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
                    ...patch.metadata,
                    fandom_preferred_image: preferFandomImage || undefined
                }
            });
            enriched += 1;
        } else {
            const existingSlug =
                existingByFandomTitle.get(title) ||
                [...titleToSlugCandidates(title)].find((cand) =>
                    entityBySlug.has(cand)
                ) ||
                null;

            const slug =
                existingSlug || pickUniqueSlug(title, usedSlugs);
            if (!slug) {
                continue;
            }

            const prev = entityBySlug.get(slug) || null;
            usedSlugs.add(slug);
            existingByFandomTitle.set(title, slug);

            entityBySlug.set(slug, {
                ...(prev || {}),
                slug,
                name:
                    (prev && prev.name) ||
                    title.replace(/\s*\([^)]*\)\s*$/, "").trim() ||
                    title,
                type: meta.type || prev?.type || "person",
                description: (() => {
                    const prevDesc = prev?.description || "";
                    const prevIsStub =
                        !prevDesc ||
                        /documented on (the )?one piece fandom wiki/i.test(
                            prevDesc
                        ) ||
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
                parentSlug:
                    meta.parentSlug || prev?.parentSlug || "one-piece",
                ...imgs,
                metadata: {
                    ...(prev?.metadata || {}),
                    canon: false,
                    discovered: true,
                    source: "onepiece.fandom",
                    fandom_url: fandomUrl,
                    fandom_title: title
                }
            });
            if (!prev) {
                created += 1;
            }
        }

        if (processed % 50 === 0) {
            console.log(
                `  progress ${processed}/${titles.length} (enriched ${enriched}, new ${created}, images ${withImages})`
            );
        }
    }

    const allowedSlugs = new Set([
        ...CORE.entities.map((entity) => entity.slug),
        ...entityBySlug.keys()
    ]);

    const relationships = (existing.relationships || []).filter(
        ([from, to]) => allowedSlugs.has(from) && allowedSlugs.has(to)
    );
    const relKeys = new Set(
        relationships.map(([a, b]) => `${a}::${b}`)
    );

    for (const entity of entityBySlug.values()) {
        const parent = entity.parentSlug || "one-piece";
        const key = `${entity.slug}::${parent}`;
        if (!relKeys.has(key) && allowedSlugs.has(parent)) {
            relationships.push([
                entity.slug,
                parent,
                "part_of",
                "Part of"
            ]);
            relKeys.add(key);
        }
    }

    const out = {
        generated_at: new Date().toISOString(),
        source: {
            wiki: FANDOM_ROOT + "One_Piece_Wiki",
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
