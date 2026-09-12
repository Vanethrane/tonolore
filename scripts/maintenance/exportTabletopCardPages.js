/**
 * Export static JSON for card-game + board-game subjects (and refresh subjects.json).
 *   node scripts/maintenance/exportTabletopCardPages.js
 */
require("../../server/src/config/env");

const fs = require("fs");
const path = require("path");
const { query, pool } = require("../../server/src/db");
const {
    newCardGameSubjectIds,
    boardGameSubjectIds
} = require("../subjects/tabletopCardCatalog");
const {
    listSubjectMeta,
    CATEGORY_CATALOG,
    getSubjectMeta
} = require("../subjects/registry");
const {
    absoluteCanonical,
    slugToRelativeDir,
    buildCategoryHtml
} = require("../lib/staticSeo");

const SITE_URL = (
    process.env.SITE_URL ||
    "https://www.tonolore.com"
).replace(/\/+$/, "");
const root = path.join(__dirname, "..", "..");

function extractOverview(content) {
    if (!content) return "";
    const match = content.match(
        /<section class="overview">[\s\S]*?<\/section>/
    );
    return match ? match[0] : "";
}

function removeOverview(content) {
    if (!content) return "";
    return content
        .replace(/<section class="overview">[\s\S]*?<\/section>/, "")
        .trim();
}

function writeJson(filePath, data) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data));
}

async function main() {
    const ids = [...newCardGameSubjectIds(), ...boardGameSubjectIds()];
    const result = await query(
        `
        SELECT
            p.*,
            e.name AS entity_name,
            e.slug AS entity_slug,
            e.type AS entity_type,
            e.short_description,
            e.description AS entity_full_description,
            e.evidence AS entity_evidence,
            e.metadata AS entity_metadata,
            e.wikipedia_url,
            e.image_url AS entity_image,
            e.image_source,
            e.image_credit,
            e.image_license,
            e.image_usage,
            e.image_alt
        FROM pages p
        LEFT JOIN entities e ON e.id = p.entity_id
        WHERE p.status = 'published'
          AND COALESCE(e.metadata->>'universe', '') = ANY($1::text[])
        ORDER BY p.slug
        `,
        [ids]
    );

    console.log(`Exporting ${result.rows.length} pages…`);
    let written = 0;
    for (const page of result.rows) {
        const metadata =
            typeof page.entity_metadata === "string"
                ? JSON.parse(page.entity_metadata)
                : page.entity_metadata || {};
        const theme = metadata.theme || metadata.universe || null;
        const subjectMeta = getSubjectMeta(theme);
        const aliases = Array.isArray(metadata.aliases) ? metadata.aliases : [];
        const payload = {
            page: {
                id: page.id,
                theme,
                slug: page.slug,
                canonical_url: absoluteCanonical(SITE_URL, page.slug),
                title: page.title,
                meta_title: page.meta_title,
                meta_description: page.meta_description,
                content: removeOverview(page.content),
                overview: extractOverview(page.content),
                word_count: page.word_count,
                uniqueness_score: page.uniqueness_score
            },
            entity: {
                id: page.entity_id,
                name: page.entity_name,
                slug: page.entity_slug,
                type: page.entity_type,
                short_description: page.short_description,
                description:
                    page.entity_full_description || page.short_description,
                evidence: page.entity_evidence,
                universe: metadata.universe || null,
                aliases,
                wikipedia_url: page.wikipedia_url || null,
                image_url: page.entity_image,
                image_source: page.image_source,
                image_credit: page.image_credit,
                image_license: page.image_license,
                image_usage: page.image_usage,
                image_alt: page.image_alt
            },
            connections: [],
            rabbit_holes: [],
            copyright: subjectMeta?.copyright
                ? {
                      theme,
                      title: subjectMeta.copyright.title,
                      body: subjectMeta.copyright.body
                  }
                : null,
            subject: subjectMeta
                ? {
                      id: subjectMeta.id,
                      name: subjectMeta.name,
                      theme: subjectMeta.theme || subjectMeta.id,
                      path: `/${subjectMeta.rootSlug || subjectMeta.id}`,
                      logo: subjectMeta.logo || null,
                      categories: subjectMeta.categories || []
                  }
                : null
        };
        const rel = slugToRelativeDir(page.slug);
        if (!rel) continue;
        for (const dir of ["docs", ""]) {
            writeJson(
                path.join(root, dir, "data", "pages", `${rel}.json`),
                payload
            );
        }
        written += 1;
    }

    const countsResult = await query(`
        SELECT metadata->>'universe' AS id, COUNT(*)::int AS entity_count
        FROM entities
        WHERE metadata->>'universe' IS NOT NULL
        GROUP BY metadata->>'universe'
    `);
    const counts = new Map(
        countsResult.rows.map((row) => [row.id, row.entity_count])
    );
    const subjects = listSubjectMeta().map((meta) => ({
        id: meta.id,
        name: meta.name,
        slug: meta.id,
        theme: meta.theme || meta.id,
        entity_count: counts.get(meta.id) || 0,
        path: `/${meta.rootSlug || meta.id}`,
        logo: meta.logo || null,
        categories: meta.categories || [],
        musicGenre: meta.musicGenre || null,
        categoryPaths: meta.categoryPaths || {},
        formatHubs: meta.formatHubs || []
    }));
    const catalog = { categories: CATEGORY_CATALOG, subjects };
    for (const dir of ["docs", ""]) {
        writeJson(path.join(root, dir, "data", "subjects.json"), catalog);
    }

    for (const categoryId of ["card-games", "tabletop"]) {
        const category = CATEGORY_CATALOG.find((c) => c.id === categoryId);
        if (!category) continue;
        const catSubjects = subjects.filter((s) =>
            (s.categories || []).includes(categoryId)
        );
        const html = buildCategoryHtml({
            siteUrl: SITE_URL,
            category,
            subjects: catSubjects
        });
        for (const dir of ["docs", ""]) {
            const out = path.join(
                root,
                dir,
                "category",
                categoryId,
                "index.html"
            );
            fs.mkdirSync(path.dirname(out), { recursive: true });
            fs.writeFileSync(out, html);
        }
    }

    console.log(
        `Wrote ${written} page files; subjects ${subjects.length}; card-games ${subjects.filter((s) => (s.categories || []).includes("card-games")).length}; board ${boardGameSubjectIds().length}`
    );
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
