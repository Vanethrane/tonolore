/**
 * Generic deep subject expander (Wikipedia / Wikidata).
 *
 * Prefer scripts/expandSubject.js for future seeds — that runs this pass
 * then merges Fandom in tandem.
 *
 *   node scripts/expandSubjectDeep.js <subject-id>
 *   node scripts/expandSubjectDeep.js harry-potter
 *   node scripts/expandSubjectDeep.js pokemon --skip-images
 */

const fs = require("fs");
const path = require("path");
const {
    sparql,
    wikipediaQuery,
    mapWikiType,
    slugify,
    sleep
} = require("./lib/wikiClient");
const {
    CONFIGS,
    listExpandableSubjects
} = require("./lib/subjectExpandConfigs");
const { inferEntityKind } = require("./lib/entityTypeLabel");

const BLOCKED_NAME_RE =
    /^(list of|category:|template:|wikipedia:|file:|portal:|module:)/i;

function loadCore(subjectId) {
    const dataPath = path.join(__dirname, "subjects", subjectId, "data.js");
    if (!fs.existsSync(dataPath)) {
        return { entities: [], relationships: [] };
    }
    return require(dataPath);
}

function pickUniqueSlug(name, used) {
    const base = slugify(name);
    if (!base || base.length < 2) {
        return null;
    }
    if (!used.has(base)) {
        return base;
    }
    for (let i = 2; i < 50; i += 1) {
        const candidate = `${base}-${i}`;
        if (!used.has(candidate)) {
            return candidate;
        }
    }
    return null;
}

async function runSparqlCollect(queries) {
    const byId = new Map();

    for (const query of queries) {
        process.stdout.write("sparql… ");
        try {
            const data = await sparql(query);
            const rows = data.results?.bindings || [];
            for (const row of rows) {
                const id = String(row.item?.value || "").replace(
                    "http://www.wikidata.org/entity/",
                    ""
                );
                if (!id || byId.has(id)) {
                    continue;
                }
                const name = row.itemLabel?.value || "";
                if (!name || /^Q\d+$/i.test(name) || BLOCKED_NAME_RE.test(name)) {
                    continue;
                }
                byId.set(id, {
                    wikidata_id: id,
                    name,
                    description: row.itemDescription?.value || "",
                    typeLabel: row.typeLabel?.value || "",
                    enwiki: row.enwiki?.value || null
                });
            }
            console.log(`+${rows.length} (unique ${byId.size})`);
        } catch (error) {
            console.log("fail", error.message.slice(0, 100));
        }
        await sleep(800);
    }

    return [...byId.values()];
}

async function crawlCategory(category, depth = 1, seen = new Set()) {
    const titles = [];
    let cont = null;

    do {
        const params = {
            list: "categorymembers",
            cmtitle: category,
            cmlimit: "500",
            cmtype: "page|subcat"
        };
        if (cont) {
            params.cmcontinue = cont;
        }

        const data = await wikipediaQuery(params);
        const members = data.query?.categorymembers || [];

        for (const member of members) {
            if (seen.has(member.title)) {
                continue;
            }
            seen.add(member.title);

            if (member.title.startsWith("Category:") && depth > 0) {
                const nested = await crawlCategory(member.title, depth - 1, seen);
                titles.push(...nested);
                await sleep(200);
            } else if (!BLOCKED_NAME_RE.test(member.title)) {
                titles.push(member.title);
            }
        }

        cont = data.continue?.cmcontinue || null;
        await sleep(150);
    } while (cont);

    return titles;
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
        wikipedia_url,
        extract: page.extract || "",
        image: thumbnail
            ? {
                  image_url: thumbnail.source,
                  image_source: wikipedia_url,
                  image_credit:
                      "Fair-use identification thumbnail via Wikipedia. Not free or redistributable artwork.",
                  image_license: "fair_use",
                  image_usage: "fair_use_identification",
                  image_alt: `Identification thumbnail for ${page.title}`
              }
            : null
    };
}

function isRelevant(identity, hints) {
    if (!identity) {
        return false;
    }
    const hay = `${identity.title}\n${identity.extract}`.toLowerCase();
    return hints.some((hint) => hay.includes(hint));
}

async function fetchPagesByTitles(titles, skipImages) {
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
                    prop: skipImages ? "extracts|info" : "pageimages|extracts|info",
                    inprop: "url",
                    ...(skipImages
                        ? {}
                        : { pithumbsize: "360", piprop: "thumbnail|name" }),
                    exintro: "1",
                    explaintext: "1",
                    redirects: "1",
                    exlimit: "15"
                });
                break;
            } catch (error) {
                attempt += 1;
                await sleep(1200 * attempt);
            }
        }

        if (!data) {
            continue;
        }

        const pages = Object.values(data.query?.pages || {});
        const normalized = data.query?.normalized || [];
        const redirects = data.query?.redirects || [];
        const alias = new Map();

        for (const row of [...normalized, ...redirects]) {
            alias.set(row.from, row.to);
        }

        for (const page of pages) {
            const identity = pageToIdentity(page);
            if (identity) {
                byTitle.set(page.title, identity);
            }
        }

        for (const title of chunk) {
            let canonical = title;
            if (alias.has(canonical)) {
                canonical = alias.get(canonical);
            }
            if (alias.has(canonical)) {
                canonical = alias.get(canonical);
            }
            if (!byTitle.has(title) && byTitle.has(canonical)) {
                byTitle.set(title, byTitle.get(canonical));
            }
        }

        if ((i / 15) % 10 === 0) {
            process.stdout.write(`pages ${Math.min(i + 15, unique.length)}/${unique.length}\n`);
        }
        await sleep(350);
    }

    return byTitle;
}

async function main() {
    const subjectId = process.argv[2];
    const skipImages = process.argv.includes("--skip-images");

    if (!subjectId || !CONFIGS[subjectId]) {
        console.error(
            "Usage: node scripts/expandSubjectDeep.js <subject-id> [--skip-images] [--with-wiki]"
        );
        console.error(
            "Prefer tandem: node scripts/expandSubject.js <subject-id>"
        );
        console.error("Subjects:", listExpandableSubjects().join(", "));
        process.exit(1);
    }

    const config = CONFIGS[subjectId];
    const core = loadCore(subjectId);
    const outPath = path.join(__dirname, "subjects", subjectId, "expanded.json");

    console.log(`Expanding ${subjectId}…`);

    const discovered = await runSparqlCollect(config.sparqlQueries || []);
    console.log(`Wikidata unique items: ${discovered.length}`);

    const categoryTitles = new Set();
    for (const category of config.wikipediaCategories || []) {
        process.stdout.write(`category ${category}… `);
        try {
            const titles = await crawlCategory(category, 1);
            titles.forEach((title) => categoryTitles.add(title));
            console.log(titles.length);
        } catch (error) {
            console.log("fail", error.message.slice(0, 80));
        }
        await sleep(400);
    }
    console.log(`Wikipedia category titles: ${categoryTitles.size}`);

    const usedSlugs = new Set(core.entities.map((entity) => entity.slug));
    usedSlugs.add(config.rootSlug);
    const knownNames = new Set(
        core.entities.flatMap((entity) => [
            entity.name.toLowerCase(),
            ...(entity.aliases || []).map((alias) => String(alias).toLowerCase())
        ])
    );

    const lookups = [];

    for (const item of discovered) {
        if (knownNames.has(item.name.toLowerCase())) {
            continue;
        }
        const slug = pickUniqueSlug(item.name, usedSlugs);
        if (!slug || slug === config.rootSlug) {
            continue;
        }
        usedSlugs.add(slug);
        knownNames.add(item.name.toLowerCase());
        lookups.push({
            slug,
            name: item.name,
            item,
            preferredTitle: item.enwiki || null,
            source: "wikidata"
        });
    }

    for (const title of categoryTitles) {
        const cleanName = title.replace(/\s*\([^)]*\)\s*$/, "").trim();
        if (knownNames.has(title.toLowerCase()) || knownNames.has(cleanName.toLowerCase())) {
            continue;
        }
        const slug = pickUniqueSlug(cleanName || title, usedSlugs);
        if (!slug || slug === config.rootSlug) {
            continue;
        }
        usedSlugs.add(slug);
        knownNames.add(cleanName.toLowerCase());
        knownNames.add(title.toLowerCase());
        lookups.push({
            slug,
            name: cleanName || title,
            item: {
                wikidata_id: null,
                name: cleanName || title,
                description: `${cleanName || title} in ${subjectId.replace(/-/g, " ")}.`,
                typeLabel: "topic",
                enwiki: title
            },
            preferredTitle: title,
            source: "wikipedia-category"
        });
    }

    console.log(`New entity candidates: ${lookups.length}`);

    let pageMap = new Map();
    const titlesToFetch = [
        ...core.entities.map((entity) => entity.name),
        ...lookups
            .map((row) => row.preferredTitle)
            .filter(Boolean)
    ];

    // For large subjects, skip Wikipedia page fetches unless explicitly requested.
    // Entities still get Wikidata labels/descriptions + category titles.
    const fetchWiki =
        process.argv.includes("--with-wiki") ||
        (!skipImages && titlesToFetch.length <= 250);

    if (fetchWiki) {
        console.log(`Fetching ${titlesToFetch.length} Wikipedia pages…`);
        pageMap = await fetchPagesByTitles(titlesToFetch, skipImages);
    } else {
        console.log(
            `Skipping bulk Wikipedia fetches (${titlesToFetch.length} titles). Use --with-wiki for extracts/images.`
        );
    }

    const enrichments = [];
    let withImages = 0;

    for (const entity of core.entities) {
        const identity = pageMap.get(entity.name);
        if (!identity) {
            continue;
        }
        if (!isRelevant(identity, config.relevanceHints) && identity.title !== entity.name) {
            // still allow exact title pages for core
        }
        const enrichment = {
            slug: entity.slug,
            wikipedia_url: identity.wikipedia_url
        };
        if (!skipImages && identity.image && isRelevant(identity, config.relevanceHints)) {
            Object.assign(enrichment, identity.image);
            withImages += 1;
        }
        if (identity.extract && (!entity.description || entity.description.length < 140)) {
            enrichment.description = identity.extract.slice(0, 1400);
        }
        enrichments.push(enrichment);
    }

    const expandedEntities = [];
    const expandedRels = [];

    for (const lookup of lookups) {
        const identity = lookup.preferredTitle
            ? pageMap.get(lookup.preferredTitle)
            : null;

        // Keep Wikidata rows even without wiki pages — that's how we reach thousands.
        // Category titles can be added without a resolved page when skipping wiki fetches.
        if (
            lookup.source === "wikipedia-category" &&
            !identity &&
            fetchWiki
        ) {
            continue;
        }

        if (
            identity &&
            lookup.source === "wikipedia-category" &&
            !isRelevant(identity, config.relevanceHints)
        ) {
            continue;
        }

        const item = lookup.item;
        const type = mapWikiType(
            item.typeLabel,
            `${item.description || ""} ${identity?.extract || ""}`
        );
        const short =
            item.description ||
            identity?.extract?.slice(0, 180) ||
            `${item.name} is part of ${config.rootSlug.replace(/-/g, " ")}.`;
        const description =
            identity?.extract?.slice(0, 1400) ||
            `${item.name}. ${item.description || ""}`.trim();

        const entity = {
            slug: lookup.slug,
            name: item.name,
            type,
            evidence: "fiction",
            short_description: short.slice(0, 280),
            description,
            aliases: [item.name],
            parentSlug: config.rootSlug,
            wikidata_id: item.wikidata_id,
            wikipedia_url: identity?.wikipedia_url || null,
            metadata: {
                source: lookup.source,
                discovered: true,
                kind: inferEntityKind({
                    type,
                    name: item.name,
                    short_description: short,
                    description
                })
            }
        };

        if (!skipImages && identity?.image && isRelevant(identity, config.relevanceHints)) {
            Object.assign(entity, identity.image);
            withImages += 1;
        }

        expandedEntities.push(entity);
        expandedRels.push([
            entity.slug,
            config.rootSlug,
            "part_of",
            `${entity.name} is part of the ${config.rootSlug.replace(/-/g, " ")} subject graph.`,
            0.88,
            0.82
        ]);
    }

    const prior = fs.existsSync(outPath)
        ? JSON.parse(fs.readFileSync(outPath, "utf8"))
        : { enrichments: [], entities: [], relationships: [] };

    // Preserve Fandom-sourced rows when re-running the Wikipedia pass alone.
    const wikiEntitySlugs = new Set(expandedEntities.map((e) => e.slug));
    const preservedFandomEntities = (prior.entities || []).filter(
        (entity) =>
            entity.metadata?.fandom_title ||
            entity.metadata?.source_fandom ||
            entity.metadata?.source === "fandom" ||
            String(entity.metadata?.source || "").includes("fandom")
    );
    for (const entity of preservedFandomEntities) {
        if (!wikiEntitySlugs.has(entity.slug)) {
            expandedEntities.push(entity);
            wikiEntitySlugs.add(entity.slug);
        } else {
            const idx = expandedEntities.findIndex((e) => e.slug === entity.slug);
            if (idx >= 0) {
                const wiki = expandedEntities[idx];
                expandedEntities[idx] = {
                    ...wiki,
                    ...entity,
                    slug: wiki.slug,
                    name: wiki.name,
                    wikipedia_url: wiki.wikipedia_url || entity.wikipedia_url,
                    wikidata_id: wiki.wikidata_id || entity.wikidata_id,
                    description:
                        (wiki.description &&
                        wiki.description.length >=
                            String(entity.description || "").length
                            ? wiki.description
                            : entity.description) || wiki.description,
                    image_url: entity.image_url || wiki.image_url,
                    image_source: entity.image_url
                        ? entity.image_source
                        : wiki.image_source,
                    image_credit: entity.image_url
                        ? entity.image_credit
                        : wiki.image_credit,
                    image_license: entity.image_url
                        ? entity.image_license
                        : wiki.image_license,
                    image_usage: entity.image_url
                        ? entity.image_usage
                        : wiki.image_usage,
                    image_alt: entity.image_url
                        ? entity.image_alt
                        : wiki.image_alt,
                    metadata: {
                        ...(wiki.metadata || {}),
                        ...(entity.metadata || {}),
                        sources: [
                            ...new Set([
                                "wikipedia",
                                "fandom",
                                ...((wiki.metadata && wiki.metadata.sources) ||
                                    []),
                                ...((entity.metadata &&
                                    entity.metadata.sources) ||
                                    [])
                            ])
                        ]
                    }
                };
            }
        }
    }

    const enrichmentBySlug = new Map(
        (prior.enrichments || []).map((row) => [row.slug, { ...row }])
    );
    for (const enrichment of enrichments) {
        const prev = enrichmentBySlug.get(enrichment.slug) || {};
        enrichmentBySlug.set(enrichment.slug, {
            ...prev,
            ...enrichment,
            // Keep a Fandom thumb if Wikipedia pass has none / weaker.
            image_url: enrichment.image_url || prev.image_url,
            image_source: enrichment.image_url
                ? enrichment.image_source
                : prev.image_source,
            image_credit: enrichment.image_url
                ? enrichment.image_credit
                : prev.image_credit,
            image_license: enrichment.image_url
                ? enrichment.image_license
                : prev.image_license,
            image_usage: enrichment.image_url
                ? enrichment.image_usage
                : prev.image_usage,
            image_alt: enrichment.image_url ? enrichment.image_alt : prev.image_alt,
            metadata: {
                ...(prev.metadata || {}),
                ...(enrichment.metadata || {})
            }
        });
    }

    const relKeys = new Set();
    const mergedRels = [];
    for (const row of [...(prior.relationships || []), ...expandedRels]) {
        if (!Array.isArray(row) || row.length < 2) {
            continue;
        }
        const key = `${row[0]}::${row[1]}::${row[2] || "part_of"}`;
        if (relKeys.has(key)) {
            continue;
        }
        relKeys.add(key);
        mergedRels.push([
            row[0],
            row[1],
            row[2] || "part_of",
            row[3] || "Part of",
            row[4] || 0.9,
            row[5] || 0.85
        ]);
    }

    const payload = {
        generated_at: new Date().toISOString(),
        source: {
            ...(prior.source || {}),
            wikipedia: true,
            wikidata: true
        },
        fair_use_policy: {
            image_license: "fair_use",
            image_usage: "fair_use_identification",
            max_edge_px: 360,
            note:
                "Thumbnails may come from Wikipedia and/or Fandom for identification and commentary only. Not free or redistributable artwork."
        },
        enrichments: [...enrichmentBySlug.values()],
        entities: expandedEntities,
        relationships: mergedRels,
        stats: {
            wikidata: discovered.length,
            category_titles: categoryTitles.size,
            new_entities: expandedEntities.length,
            images_attached: withImages,
            core_enrichments: enrichments.length,
            preserved_fandom: preservedFandomEntities.length
        }
    };

    fs.writeFileSync(outPath, JSON.stringify(payload), "utf8");
    console.log("Wrote", outPath);
    console.log(payload.stats);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
