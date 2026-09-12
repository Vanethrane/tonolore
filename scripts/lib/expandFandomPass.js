/**
 * Generic Fandom expand pass — merges into subjects/<id>/expanded.json.
 *
 * Prefer Fandom for franchise identification thumbs; keep Wikipedia URLs /
 * longer encyclopedia descriptions when already present.
 *
 * Rich multi-paragraph intros are fetched by default (batch revisions).
 * Pass { skipIntros: true } only for fast crawls that you will re-seed
 * through seedRunner (which also ensures rich blurbs before insert).
 *
 *   const { expandFandomPass } = require("./expandFandomPass");
 *   await expandFandomPass("harry-potter", { limit: 200 });
 */

const fs = require("fs");
const path = require("path");
const { slugify } = require("./wikiClient");
const {
    sleep,
    listCategoryMembers,
    fetchPageIdentities,
    fetchWikitextIntros
} = require("./fandomClient");
const { getExpandConfig } = require("./subjectExpandConfigs");
const {
    isStubDescription,
    shortFromIntro
} = require("./richDescriptions");
const {
    classifyFromCategoryTitle,
    inferEntityKind
} = require("./entityTypeLabel");

const BLOCKED_TITLE_RE =
    /^(list of|category:|template:|file:|user:|user blog:|message wall:|thread:|board:|forum:)/i;

const SKIP_NAME_RE =
    /\b(gallery|personality|relationships|history|trivia|behind the scenes|appearances|sources|disambiguation|redirect|concept art|other media)\b/i;

function loadCore(subjectId) {
    const dataPath = path.join(__dirname, "..", "subjects", subjectId, "data.js");
    if (!fs.existsSync(dataPath)) {
        return { entities: [] };
    }
    return require(dataPath);
}

function loadExpanded(outPath) {
    if (!fs.existsSync(outPath)) {
        return {
            enrichments: [],
            entities: [],
            relationships: [],
            fair_use_policy: null
        };
    }
    return JSON.parse(fs.readFileSync(outPath, "utf8"));
}

function pickUniqueSlug(name, used, rootSlug) {
    const base = slugify(name);
    if (!base || base === rootSlug || base.length < 2) {
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

function titleToSlugCandidates(title) {
    const cleaned = title
        .replace(/\s*\([^)]*\)\s*$/, "")
        .replace(/\s+/g, " ")
        .trim();
    return [slugify(title), slugify(cleaned)].filter(Boolean);
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

function dedupeFandomEntities(entities) {
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

function buildCoreIndex(core, coreTitles = {}) {
    const bySlug = new Map();
    const byNormName = new Map();

    for (const entity of core.entities || []) {
        bySlug.set(entity.slug, entity);
        byNormName.set(entity.name.toLowerCase(), entity.slug);
        for (const alias of entity.aliases || []) {
            byNormName.set(String(alias).toLowerCase(), entity.slug);
        }
    }

    for (const [slug, title] of Object.entries(coreTitles)) {
        byNormName.set(String(title).toLowerCase(), slug);
    }

    return { bySlug, byNormName };
}

function imageFields(identity, title, credit, fandomRoot) {
    if (!identity?.thumbnail) {
        return {};
    }

    return {
        image_url: normalizeThumbUrl(identity.thumbnail),
        image_source:
            identity.fullurl ||
            `${fandomRoot}${encodeURIComponent(title.replace(/ /g, "_"))}`,
        image_credit: `Fair-use identification thumbnail via Fandom. ${credit} Not free or redistributable artwork.`,
        image_license: "fair_use",
        image_usage: "fair_use_identification",
        image_alt: `Identification thumbnail for ${title}`
    };
}

/**
 * Expand a subject from its Fandom wiki and merge into expanded.json.
 */
async function expandFandomPass(subjectId, opts = {}) {
    const config = getExpandConfig(subjectId);
    if (!config?.fandom) {
        throw new Error(
            `No fandom config for ${subjectId}. Add fandom.host + categories in subjectExpandConfigs.js`
        );
    }

    const fandom = config.fandom;
    const host = fandom.host;
    const fandomRoot = `https://${host}/wiki/`;
    const credit = fandom.rightsCredit || "Rights remain with the franchise holders.";
    const core = loadCore(subjectId);
    const outPath = path.join(
        __dirname,
        "..",
        "subjects",
        subjectId,
        "expanded.json"
    );

    const existing = loadExpanded(outPath);
    existing.entities = dedupeFandomEntities(existing.entities);

    const coreTitles = fandom.coreTitles || {};
    // Auto-map core entities by exact name when no explicit map.
    for (const entity of core.entities || []) {
        if (!coreTitles[entity.slug]) {
            coreTitles[entity.slug] = entity.name;
        }
    }

    const { bySlug, byNormName } = buildCoreIndex(core, coreTitles);
    const usedSlugs = new Set([
        ...(core.entities || []).map((e) => e.slug),
        ...(existing.entities || []).map((e) => e.slug),
        config.rootSlug
    ]);

    const existingByFandomTitle = new Map();
    for (const entity of existing.entities || []) {
        const title = entity.metadata?.fandom_title;
        if (title) {
            existingByFandomTitle.set(title, entity.slug);
        }
    }

    const pageMeta = new Map();
    const categories = Array.isArray(opts.categories) && opts.categories.length
        ? opts.categories
        : fandom.categories || [];

    console.log(`Fandom pass (${host}) for ${subjectId}…`);

    for (const cat of categories) {
        console.log(`  Category:${cat.title}…`);
        let members = [];
        try {
            const categoryCap =
                opts.categoryMaxPages ||
                cat.maxPages ||
                (opts.onlyNew ? 20000 : 3000);
            members = await listCategoryMembers(host, cat.title, {
                // When discovering only-new titles, don't clamp category crawl to
                // the batch size — we need to walk past already-known pages.
                maxPages: opts.onlyNew
                    ? categoryCap
                    : Math.min(
                          categoryCap,
                          opts.limit || categoryCap
                      ),
                delayMs: opts.delayMs || 110,
                pageOnly: !cat.includeSubcats,
                includeSubcats: Boolean(cat.includeSubcats),
                maxDepth: cat.maxDepth || 1
            });
        } catch (error) {
            console.warn(
                `    skip category (${error.message.slice(0, 120)})`
            );
            await sleep(opts.delayMs || 110);
            continue;
        }

        for (const member of members) {
            if (shouldSkipTitle(member.title)) {
                continue;
            }
            const prev = pageMeta.get(member.title);
            const classified = classifyFromCategoryTitle(
                cat.title,
                cat.type || "topic"
            );
            const nextType = cat.type || classified.type;
            const nextKind = cat.kind || classified.kind;
            if (!prev) {
                pageMeta.set(member.title, {
                    title: member.title,
                    type: nextType,
                    kind: nextKind,
                    parentSlug: cat.parent || config.rootSlug
                });
            } else if (prev.type !== "person" && nextType === "person") {
                prev.type = "person";
                prev.kind = nextKind || "character";
                prev.parentSlug = cat.parent || config.rootSlug;
            } else if (!prev.kind && nextKind) {
                prev.kind = nextKind;
            }
        }

        console.log(
            `    +${members.length} raw → ${pageMeta.size} unique so far`
        );

        if (opts.onlyNew && opts.limit) {
            const newSoFar = [...pageMeta.keys()].filter(
                (title) => !existingByFandomTitle.has(title)
            ).length;
            if (newSoFar >= opts.limit) {
                break;
            }
        } else if (opts.limit && pageMeta.size >= opts.limit) {
            break;
        }
    }

    for (const [slug, title] of Object.entries(coreTitles)) {
        if (!pageMeta.has(title) && !shouldSkipTitle(title)) {
            // In onlyNew grow mode, skip stuffing the queue with core titles —
            // those are already seeded; we want brand-new Fandom pages.
            if (opts.onlyNew) {
                continue;
            }
            const entity = bySlug.get(slug);
            pageMeta.set(title, {
                title,
                type: entity?.type || "topic",
                kind:
                    entity?.metadata?.kind ||
                    inferEntityKind(entity || { type: "topic", name: title }),
                parentSlug: entity?.parentSlug || config.rootSlug,
                forceCoreSlug: slug
            });
        }
    }

    let titles = [...pageMeta.keys()];
    if (opts.onlyNew) {
        const fresh = titles.filter(
            (title) => !existingByFandomTitle.has(title)
        );
        const refresh = titles
            .filter((title) => existingByFandomTitle.has(title))
            .slice(0, Math.min(20, Math.floor((opts.limit || 40) / 4)));
        titles = [...fresh, ...refresh];
        console.log(
            `  onlyNew: ${fresh.length} unseen titles` +
                (refresh.length ? ` + ${refresh.length} refresh` : "")
        );
    }
    if (opts.limit) {
        titles = titles.slice(0, opts.limit);
    }

    console.log(`  Fetching identities for ${titles.length} pages…`);

    const identities = new Map();
    for (const batch of chunk(titles, opts.batchSize || 40)) {
        try {
            const map = await fetchPageIdentities(host, batch, 360);
            for (const [k, v] of map) {
                identities.set(k, v);
            }
        } catch (error) {
            console.warn("  identity batch failed:", error.message);
            await sleep(1500);
        }
        await sleep(opts.delayMs || 110);
    }

    // Rich intros are ON by default — batch revisions so every discovered
    // page gets 2–4 paragraphs instead of "documented on fandom.com" stubs.
    const introByTitle = new Map();
    const wantIntros = !opts.skipIntros;
    if (wantIntros && titles.length) {
        const introTitles = [
            ...new Set(
                titles.map((title) => identities.get(title)?.title || title)
            )
        ];
        console.log(`  Fetching rich intros for ${introTitles.length} pages…`);
        for (const batch of chunk(introTitles, 12)) {
            try {
                const map = await fetchWikitextIntros(host, batch, 3200);
                for (const [key, value] of map) {
                    introByTitle.set(key, value);
                }
            } catch (error) {
                console.warn("  intro batch failed:", error.message);
                if (/429/.test(error.message)) {
                    await sleep(8000);
                } else {
                    await sleep(1200);
                }
            }
            await sleep(opts.delayMs || 130);
        }
        console.log(`  Intros resolved: ${introByTitle.size}/${introTitles.length}`);
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
        const resolvedTitle = identity?.title || title;
        const imgs = imageFields(identity, resolvedTitle, credit, fandomRoot);
        const fandomUrl =
            identity?.fullurl ||
            `${fandomRoot}${title.replace(/ /g, "_")}`;

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
            for (const cand of titleToSlugCandidates(identity.title)) {
                if (!coreSlug && bySlug.has(cand)) {
                    coreSlug = cand;
                }
            }
        }
        if (!coreSlug) {
            const cleaned = title.replace(/\s*\([^)]*\)\s*$/, "").trim();
            coreSlug = byNormName.get(cleaned.toLowerCase()) || null;
        }

        const intro =
            introByTitle.get(resolvedTitle) ||
            introByTitle.get(title) ||
            null;

        if (imgs.image_url) {
            withImages += 1;
        }
        if (intro) {
            withIntros += 1;
        }

        const patchMeta = {
            fandom_url: fandomUrl,
            fandom_title: resolvedTitle,
            source_fandom: host
        };

        if (coreSlug) {
            const prev = enrichmentBySlug.get(coreSlug) || { slug: coreSlug };
            const preferFandomImage = Boolean(imgs.image_url);
            const prevIsStub =
                isStubDescription(prev.description) ||
                String(prev.description || "").length < 160;
            const nextDesc = intro
                ? prevIsStub ||
                  intro.length >= Math.min(String(prev.description || "").length, 200)
                    ? intro
                    : prev.description
                : prev.description;

            enrichmentBySlug.set(coreSlug, {
                ...prev,
                slug: coreSlug,
                description: nextDesc,
                ...(intro && (!prev.short_description || prevIsStub)
                    ? { short_description: shortFromIntro(intro) }
                    : {}),
                ...(preferFandomImage ? imgs : {}),
                wikipedia_url: prev.wikipedia_url,
                metadata: {
                    ...(prev.metadata || {}),
                    ...patchMeta,
                    sources: [
                        ...new Set([
                            ...((prev.metadata && prev.metadata.sources) || []),
                            "wikipedia",
                            "fandom"
                        ].filter(Boolean))
                    ],
                    fandom_preferred_image: preferFandomImage || undefined
                }
            });
            enriched += 1;
        } else {
            const existingSlug =
                existingByFandomTitle.get(title) ||
                existingByFandomTitle.get(resolvedTitle) ||
                titleToSlugCandidates(title).find((cand) =>
                    entityBySlug.has(cand)
                ) ||
                null;

            const slug =
                existingSlug ||
                pickUniqueSlug(resolvedTitle || title, usedSlugs, config.rootSlug);
            if (!slug) {
                continue;
            }

            const prev = entityBySlug.get(slug) || null;
            usedSlugs.add(slug);
            existingByFandomTitle.set(title, slug);
            existingByFandomTitle.set(resolvedTitle, slug);

            const prevDesc = prev?.description || "";
            const prevIsStub = isStubDescription(prevDesc);

            const resolvedType = meta.type || prev?.type || "topic";
            const resolvedName =
                (prev && prev.name) ||
                resolvedTitle.replace(/\s*\([^)]*\)\s*$/, "").trim() ||
                title;
            const resolvedKind =
                meta.kind ||
                prev?.metadata?.kind ||
                inferEntityKind({
                    type: resolvedType,
                    name: resolvedName,
                    short_description: prev?.short_description,
                    description: intro || prev?.description
                });

            entityBySlug.set(slug, {
                ...(prev || {}),
                slug,
                name: resolvedName,
                type: resolvedType,
                description: intro || (prevIsStub ? "" : prevDesc) || "",
                short_description:
                    prev?.short_description &&
                    !isStubDescription(prev.short_description)
                        ? prev.short_description
                        : intro
                          ? shortFromIntro(intro)
                          : undefined,
                evidence: "fiction",
                parentSlug:
                    meta.parentSlug || prev?.parentSlug || config.rootSlug,
                wikipedia_url: prev?.wikipedia_url || null,
                wikidata_id: prev?.wikidata_id || null,
                ...imgs,
                metadata: {
                    ...(prev?.metadata || {}),
                    canon: false,
                    discovered: true,
                    source: prev?.metadata?.source || "fandom",
                    kind: resolvedKind,
                    ...patchMeta,
                    sources: [
                        ...new Set([
                            ...((prev?.metadata && prev.metadata.sources) ||
                                []),
                            prev?.wikipedia_url || prev?.wikidata_id
                                ? "wikipedia"
                                : null,
                            "fandom"
                        ].filter(Boolean))
                    ]
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

    const allowedSlugs = new Set([
        ...(core.entities || []).map((e) => e.slug),
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

    const relKeys = new Set(relationships.map(([a, b]) => `${a}::${b}`));

    for (const entity of entityBySlug.values()) {
        const parent = entity.parentSlug || config.rootSlug;
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
        ...existing,
        generated_at: new Date().toISOString(),
        source: {
            ...(existing.source || {}),
            wikipedia: true,
            fandom: fandomRoot,
            host
        },
        fair_use_policy: {
            image_license: "fair_use",
            image_usage: "fair_use_identification",
            max_edge_px: 360,
            note: `Thumbnails may come from Wikipedia and/or Fandom (${host}) for identification and commentary only. ${credit} Not free or redistributable artwork.`
        },
        enrichments: [...enrichmentBySlug.values()],
        entities: [...entityBySlug.values()],
        relationships,
        stats: {
            ...(existing.stats || {}),
            fandom_titles: titles.length,
            fandom_enriched_core: enriched,
            fandom_created: created,
            fandom_images: withImages,
            fandom_intros: withIntros
        }
    };

    const payload = JSON.stringify(out, null, 2);
    const tmp = `${outPath}.${process.pid}.tmp`;
    let wrote = false;
    for (let attempt = 0; attempt < 8; attempt += 1) {
        try {
            fs.writeFileSync(tmp, payload);
            fs.renameSync(tmp, outPath);
            wrote = true;
            break;
        } catch (error) {
            try {
                fs.unlinkSync(tmp);
            } catch (_) {
                /* ignore */
            }
            if (attempt === 7) {
                throw error;
            }
            const end = Date.now() + 250 * (attempt + 1);
            while (Date.now() < end) {
                /* brief backoff for Windows file locks */
            }
        }
    }
    if (!wrote) {
        throw new Error(`Failed to write ${outPath}`);
    }
    console.log("  Wrote", outPath);
    console.log("  Fandom stats", out.stats);

    return out;
}

module.exports = {
    expandFandomPass
};
