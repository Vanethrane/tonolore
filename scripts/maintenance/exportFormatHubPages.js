/**
 * Export format-hub pages + their nested works (long-tail) to docs/.
 * Continues past Windows file-lock errors.
 *
 *   node scripts/maintenance/exportFormatHubPages.js
 */

require("../../server/src/config/env");
const fs = require("fs");
const path = require("path");
const { query, pool } = require("../../server/src/db");
const {
    getSubjectMeta,
    listSubjectMeta,
    CATEGORY_CATALOG
} = require("../subjects/registry");
const { subjectsWithFormatHubs } = require("../subjects/formatHubs");
const {
    absoluteCanonical,
    slugToRelativeDir
} = require("../lib/staticSeo");
const {
    entityTypeLabel,
    inferEntityKind
} = require("../lib/entityTypeLabel");

const SITE_URL = (process.env.SITE_URL || "https://www.tonolore.com").replace(
    /\/+$/,
    ""
);
const docs = path.join(__dirname, "..", "..", "docs");

function extractOverview(content) {
    if (!content) return "";
    const matches = content.match(/<section class="overview">[\s\S]*?<\/section>/g);
    return matches ? matches.join("\n") : "";
}

function removeOverview(content) {
    if (!content) return "";
    return content
        .replace(/<section class="overview">[\s\S]*?<\/section>/g, "")
        .trim();
}

function writeJson(filePath, data) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    const body = JSON.stringify(data);
    let lastError = null;
    for (let attempt = 0; attempt < 6; attempt += 1) {
        try {
            fs.writeFileSync(filePath, body);
            return true;
        } catch (error) {
            lastError = error;
            Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 120 * (attempt + 1));
        }
    }
    console.warn(`skip write ${filePath}: ${lastError.code || lastError.message}`);
    return false;
}

async function main() {
    const ids = subjectsWithFormatHubs();
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
          AND (
            e.metadata->>'kind' = 'format-hub'
            OR e.metadata->>'isFormatHub' = 'true'
            OR e.metadata->>'formatHub' IS NOT NULL
            OR p.slug ~ '^/[^/]+/(movies|television|video-games|anime|manga|comics|books|card-games|tabletop|live-action)(/|$)'
          )
        ORDER BY p.slug
        `,
        [ids]
    );

    console.log(`Exporting ${result.rows.length} format-hub related pages`);
    let written = 0;
    let skipped = 0;

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
                      categories: subjectMeta.categories || [],
                      categoryPaths: subjectMeta.categoryPaths || {}
                  }
                : null
        };

        const rel = slugToRelativeDir(page.slug);
        if (!rel) {
            skipped += 1;
            continue;
        }
        const ok = writeJson(
            path.join(docs, "data", "pages", `${rel}.json`),
            payload
        );
        if (ok) {
            written += 1;
        } else {
            skipped += 1;
        }
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
            musicGenre: meta.musicGenre || null,
            categoryPaths: meta.categoryPaths || {},
            formatHubs: meta.formatHubs || []
        }))
    };
    writeJson(path.join(docs, "data", "subjects.json"), catalog);
    console.log(`Wrote ${written} pages (${skipped} skipped) + subjects.json`);
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
