/**
 * Export static pages for a comma-separated list of subject universes.
 *   node scripts/maintenance/exportSubjectSlice.js adventure-time,lego,wwe
 */
require("../../server/src/config/env");

const fs = require("fs");
const path = require("path");
const { query, pool } = require("../../server/src/db");
const { getSubjectMeta, listSubjectMeta, CATEGORY_CATALOG } = require("../subjects/registry");
const {
    absoluteCanonical,
    slugToRelativeDir,
    buildCategoryHtml
} = require("../lib/staticSeo");
const {
    connectionLoreBlurb,
    isGenericSharedLoreTitle
} = require("../lib/connectionLore");
const {
    entityTypeLabel,
    inferEntityKind
} = require("../lib/entityTypeLabel");

const SITE_URL = (process.env.SITE_URL || "https://www.tonolore.com").replace(
    /\/+$/,
    ""
);
const docs = path.join(__dirname, "..", "..", "docs");
const ids = process.argv
    .slice(2)
    .join(",")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

if (!ids.length) {
    console.error("Usage: node scripts/maintenance/exportSubjectSlice.js id1,id2");
    process.exit(1);
}

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

    console.log(`Exporting ${result.rows.length} pages for ${ids.join(", ")}`);
    let written = 0;
    for (const page of result.rows) {
        const metadata =
            typeof page.entity_metadata === "string"
                ? JSON.parse(page.entity_metadata)
                : page.entity_metadata || {};
        const theme = metadata.theme || metadata.universe || null;
        const subjectMeta = getSubjectMeta(theme);
        const aliases = Array.isArray(metadata.aliases) ? metadata.aliases : [];
        const entityPayload = {
            type: page.entity_type,
            name: page.entity_name,
            short_description: page.short_description,
            description: page.entity_full_description,
            metadata
        };
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
                kind: inferEntityKind(entityPayload),
                type_label: entityTypeLabel(entityPayload),
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
        writeJson(path.join(docs, "data", "pages", `${rel}.json`), payload);
        written += 1;
    }

    const counts = await query(`
        SELECT metadata->>'universe' AS id, COUNT(*)::int AS entity_count
        FROM entities
        WHERE metadata->>'universe' IS NOT NULL
        GROUP BY 1
    `);
    const countMap = new Map(
        counts.rows.map((row) => [row.id, row.entity_count])
    );
    const catalog = {
        categories: CATEGORY_CATALOG,
        subjects: listSubjectMeta().map((meta) => ({
            id: meta.id,
            name: meta.name,
            slug: meta.id,
            theme: meta.theme || meta.id,
            entity_count: countMap.get(meta.id) || 0,
            path: `/${meta.rootSlug || meta.id}`,
            logo: meta.logo || null,
            categories: meta.categories || [],
            musicGenre: meta.musicGenre || null
        }))
    };
    writeJson(path.join(docs, "data", "subjects.json"), catalog);

    for (const category of CATEGORY_CATALOG) {
        const subjects = catalog.subjects.filter((subject) =>
            (subject.categories || []).includes(category.id)
        );
        const htmlPath = path.join(docs, "category", category.id, "index.html");
        fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
        fs.writeFileSync(
            htmlPath,
            buildCategoryHtml({ siteUrl: SITE_URL, category, subjects })
        );
    }

    console.log(`Wrote ${written} pages + refreshed subjects.json`);
    await pool.end();
}

main().catch((error) => {
    console.error(error);
    pool.end().finally(() => process.exit(1));
});
