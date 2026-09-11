/**
 * Export static JSON for expansion-category subjects + refresh subjects/category shelves.
 *   node scripts/maintenance/exportExpansionPages.js
 */
require("../../server/src/config/env");

const fs = require("fs");
const path = require("path");
const { query, pool } = require("../../server/src/db");
const { expansionSubjectIds } = require("../subjects/expansionCatalog");
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
const {
    connectionLoreBlurb,
    isGenericSharedLoreTitle
} = require("../lib/connectionLore");
const {
    entityTypeLabel,
    inferEntityKind
} = require("../lib/entityTypeLabel");

const SITE_URL = (
    process.env.SITE_URL ||
    "https://www.tonolore.com"
).replace(/\/+$/, "");
const root = path.join(__dirname, "..", "..");
const docs = path.join(root, "docs");

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

async function loadConnections(entityIds) {
    if (!entityIds.length) {
        return new Map();
    }

    const result = await query(
        `
        WITH RECURSIVE entity_paths AS (
            SELECT id, slug, url_parent_id, '/' || slug AS path
            FROM entities
            WHERE url_parent_id IS NULL
            UNION ALL
            SELECT e.id, e.slug, e.url_parent_id, ep.path || '/' || e.slug
            FROM entities e
            JOIN entity_paths ep ON e.url_parent_id = ep.id
        )
        SELECT
            r.id,
            r.relationship,
            r.title,
            r.explanation,
            r.strength,
            r.discovery_score,
            CASE
                WHEN r.from_entity_id = page.entity_id THEN 'outgoing'
                ELSE 'incoming'
            END AS direction,
            other.id AS entity_id,
            other.slug,
            other.name,
            other.type,
            other.short_description,
            other.image_url,
            COALESCE(ep.path, '/' || other.slug) AS path,
            page.entity_id AS page_entity_id
        FROM unnest($1::uuid[]) AS page(entity_id)
        JOIN relationships r
            ON r.from_entity_id = page.entity_id
            OR r.to_entity_id = page.entity_id
        JOIN entities other
            ON other.id = CASE
                WHEN r.from_entity_id = page.entity_id THEN r.to_entity_id
                ELSE r.from_entity_id
            END
        LEFT JOIN entity_paths ep ON ep.id = other.id
        `,
        [entityIds]
    );

    const map = new Map();
    for (const row of result.rows) {
        const list = map.get(row.page_entity_id) || [];
        const { page_entity_id, ...connection } = row;
        list.push(connection);
        map.set(page_entity_id, list);
    }
    return map;
}

async function main() {
    const ids = expansionSubjectIds();
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

    console.log(`Exporting ${result.rows.length} expansion pages…`);
    const entityIds = result.rows
        .map((row) => row.entity_id)
        .filter(Boolean);
    const connectionsByEntity = await loadConnections(entityIds);

    let written = 0;
    for (const page of result.rows) {
        const metadata =
            typeof page.entity_metadata === "string"
                ? JSON.parse(page.entity_metadata)
                : page.entity_metadata || {};
        const theme = metadata.theme || metadata.universe || null;
        const subjectMeta = getSubjectMeta(theme);
        const aliases = Array.isArray(metadata.aliases) ? metadata.aliases : [];
        const connections = (connectionsByEntity.get(page.entity_id) || []).map(
            (connection) => {
                const lore = connectionLoreBlurb(connection, {
                    fromName: page.entity_name,
                    relationshipLabel: entityTypeLabel
                });
                const kind = inferEntityKind(connection);
                return {
                    ...connection,
                    kind,
                    type_label: entityTypeLabel({ ...connection, kind }),
                    title: isGenericSharedLoreTitle(connection.title)
                        ? lore
                        : connection.title,
                    explanation: connection.explanation || lore
                };
            }
        );

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
            connections,
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
        GROUP BY metadata->>'universe'
    `);
    const countMap = new Map(counts.rows.map((row) => [row.id, row.entity_count]));
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
            buildCategoryHtml({
                siteUrl: SITE_URL,
                category,
                subjects
            })
        );
    }

    console.log(`Wrote ${written} page JSON files + subjects.json + category shelves`);
    await pool.end();
}

main().catch((error) => {
    console.error(error);
    pool.end().finally(() => process.exit(1));
});
