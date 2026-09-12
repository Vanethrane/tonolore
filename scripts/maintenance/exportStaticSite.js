/**
 * Export published lore as static files for GitHub Pages.
 * The live site has no Express API — without this, the SPA falls back to a
 * stub One Piece card and every page/search request 404s.
 *
 *   node scripts/maintenance/exportStaticSite.js [targetDir]
 *
 * Writes:
 *   data/subjects.json
 *   data/search-index.json
 *   data/pages/<slug-path>.json
 *   sitemap.xml
 *   robots.txt
 *   category/<id>/index.html (crawlable shelves)
 *   <slug>/index.html (crawlable entity pages — optional via --html)
 */

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");

// Load .env via server config (dotenv lives in server/node_modules)
require("../../server/src/config/env");

const { query, pool } = require("../../server/src/db");
const {
    CATEGORY_CATALOG,
    getSubjectMeta,
    listSubjectMeta
} = require("../subjects/registry");
const {
    absoluteCanonical,
    slugToRelativeDir,
    buildRobotsTxt,
    buildSitemapXml,
    buildEntityPageHtml,
    buildHomeHtml,
    buildCategoryHtml,
    buildNotFoundHtml
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

const writeHtml = process.argv.includes("--html");
const targetArg = process.argv
    .slice(2)
    .find((arg) => arg !== "--html" && !arg.startsWith("-"));
const targetDir = path.resolve(targetArg || path.join(root, "docs"));

function extractOverview(content) {
    if (!content) {
        return "";
    }
    const match = content.match(
        /<section class="overview">[\s\S]*?<\/section>/
    );
    return match ? match[0] : "";
}

function removeOverview(content) {
    if (!content) {
        return "";
    }
    return content
        .replace(/<section class="overview">[\s\S]*?<\/section>/, "")
        .trim();
}

function ensureDir(dir) {
    fs.mkdirSync(dir, { recursive: true });
}

function writeJson(filePath, data) {
    ensureDir(path.dirname(filePath));
    fs.writeFileSync(filePath, JSON.stringify(data));
}

function writeText(filePath, text) {
    ensureDir(path.dirname(filePath));
    fs.writeFileSync(filePath, text);
}

async function loadSubjectsCatalog() {
    const result = await query(`
        SELECT
            metadata->>'universe' AS id,
            COUNT(*)::int AS entity_count
        FROM entities
        WHERE metadata->>'universe' IS NOT NULL
        GROUP BY metadata->>'universe'
        ORDER BY id
    `);

    const counts = new Map(
        result.rows.map((row) => [row.id, row.entity_count])
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

    return {
        categories: CATEGORY_CATALOG,
        subjects
    };
}

async function loadSearchIndex() {
    const result = await query(`
        SELECT
            e.id,
            e.slug,
            e.name,
            e.type,
            e.short_description,
            e.metadata,
            p.slug AS page_slug
        FROM pages p
        JOIN entities e ON e.id = p.entity_id
        WHERE p.status = 'published'
        ORDER BY e.name
    `);

    return {
        generated_at: new Date().toISOString(),
        count: result.rows.length,
        entities: result.rows.map((row) => {
            const metadata =
                typeof row.metadata === "string"
                    ? JSON.parse(row.metadata)
                    : row.metadata || {};
            const aliases = Array.isArray(metadata.aliases)
                ? metadata.aliases
                : [];

            return {
                id: row.id,
                name: row.name,
                type: row.type,
                kind: inferEntityKind({
                    type: row.type,
                    name: row.name,
                    short_description: row.short_description,
                    metadata
                }),
                type_label: entityTypeLabel({
                    type: row.type,
                    name: row.name,
                    short_description: row.short_description,
                    metadata
                }),
                slug: row.slug,
                path: row.page_slug,
                short_description: row.short_description,
                aliases
            };
        })
    };
}

async function loadPublishedPages() {
    return query(`
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
            e.image_alt,
            COALESCE(p.updated_at, p.created_at) AS updated_at
        FROM pages p
        LEFT JOIN entities e ON e.id = p.entity_id
        WHERE p.status = 'published'
        ORDER BY p.slug
    `);
}

async function loadAllConnectionsByEntity() {
    const result = await query(`
        WITH RECURSIVE entity_paths AS (
            SELECT
                id,
                slug,
                url_parent_id,
                '/' || slug AS path
            FROM entities
            WHERE url_parent_id IS NULL

            UNION ALL

            SELECT
                e.id,
                e.slug,
                e.url_parent_id,
                ep.path || '/' || e.slug AS path
            FROM entities e
            JOIN entity_paths ep
                ON e.url_parent_id = ep.id
        ),
        ranked AS (
            SELECT
                CASE
                    WHEN r.from_entity_id = other_side.page_entity_id
                    THEN r.from_entity_id
                    ELSE r.to_entity_id
                END AS page_entity_id,
                r.id,
                r.relationship,
                r.title,
                r.explanation,
                r.strength,
                r.discovery_score,
                CASE
                    WHEN r.from_entity_id = other_side.page_entity_id
                    THEN 'outgoing'
                    ELSE 'incoming'
                END AS direction,
                r.from_entity_id,
                r.to_entity_id,
                other.id AS entity_id,
                other.slug,
                other.name,
                other.type,
                other.short_description,
                other.evidence,
                other.image_url,
                COALESCE(ep.path, '/' || other.slug) AS path,
                ROW_NUMBER() OVER (
                    PARTITION BY other_side.page_entity_id
                    ORDER BY r.discovery_score DESC, r.strength DESC
                ) AS rn
            FROM (
                SELECT DISTINCT entity_id AS page_entity_id
                FROM pages
                WHERE status = 'published'
                  AND entity_id IS NOT NULL
            ) other_side
            JOIN relationships r
                ON r.from_entity_id = other_side.page_entity_id
                OR r.to_entity_id = other_side.page_entity_id
            JOIN entities other
                ON other.id = CASE
                    WHEN r.from_entity_id = other_side.page_entity_id
                    THEN r.to_entity_id
                    ELSE r.from_entity_id
                END
            LEFT JOIN entity_paths ep
                ON ep.id = other.id
        )
        SELECT *
        FROM ranked
        WHERE rn <= 24
    `);

    const map = new Map();
    for (const row of result.rows) {
        const list = map.get(row.page_entity_id) || [];
        const { page_entity_id, rn, ...connection } = row;
        list.push(connection);
        map.set(row.page_entity_id, list);
    }
    return map;
}

async function loadAllRabbitHolesByEntity() {
    const result = await query(`
        SELECT
            rh.starting_entity_id AS page_entity_id,
            rh.slug,
            rh.title,
            rh.description,
            rh.depth,
            rh.weirdness_score,
            rh.obscurity_score,
            rh.overall_score,
            ROW_NUMBER() OVER (
                PARTITION BY rh.starting_entity_id
                ORDER BY rh.overall_score DESC
            ) AS rn
        FROM rabbit_holes rh
        WHERE rh.starting_entity_id IN (
            SELECT entity_id FROM pages WHERE status = 'published'
        )
    `);

    const map = new Map();
    for (const row of result.rows) {
        if (row.rn > 10) {
            continue;
        }
        const list = map.get(row.page_entity_id) || [];
        const { page_entity_id, rn, ...hole } = row;
        list.push(hole);
        map.set(row.page_entity_id, list);
    }
    return map;
}

function buildPagePayload(page, connections, rabbitHoles) {
    const metadata =
        typeof page.entity_metadata === "string"
            ? JSON.parse(page.entity_metadata)
            : page.entity_metadata || {};

    const theme = metadata.theme || metadata.universe || null;
    const subjectMeta = getSubjectMeta(theme);
    const aliases = Array.isArray(metadata.aliases) ? metadata.aliases : [];
    const canonicalUrl = absoluteCanonical(SITE_URL, page.slug);

    return {
        page: {
            id: page.id,
            theme,
            slug: page.slug,
            canonical_url: canonicalUrl,
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
            kind: inferEntityKind({
                type: page.entity_type,
                name: page.entity_name,
                short_description: page.short_description,
                description: page.entity_full_description,
                metadata
            }),
            type_label: entityTypeLabel({
                type: page.entity_type,
                name: page.entity_name,
                short_description: page.short_description,
                description: page.entity_full_description,
                metadata
            }),
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
        connections: (connections || []).map((connection) => {
            const lore = connectionLoreBlurb(connection, {
                fromName: page.entity_name,
                relationshipLabel: entityTypeLabel
            });
            const title = isGenericSharedLoreTitle(connection.title)
                ? lore
                : connection.title;
            const kind = inferEntityKind(connection);

            return {
                ...connection,
                title,
                explanation: connection.explanation || lore,
                kind,
                type_label: entityTypeLabel({ ...connection, kind })
            };
        }),
        rabbit_holes: rabbitHoles,
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
}

async function main() {
    console.log(`Exporting static site → ${targetDir}`);
    console.log(`SITE_URL=${SITE_URL}`);

    ensureDir(targetDir);

    const catalog = await loadSubjectsCatalog();
    writeJson(path.join(targetDir, "data", "subjects.json"), catalog);
    console.log(`subjects: ${catalog.subjects.length}`);

    const searchIndex = await loadSearchIndex();
    writeJson(path.join(targetDir, "data", "search-index.json"), searchIndex);
    console.log(`search index: ${searchIndex.count}`);

    const pagesResult = await loadPublishedPages();
    console.log(`pages: ${pagesResult.rows.length}`);

    console.log("Loading connections + rabbit holes…");
    const connectionsByEntity = await loadAllConnectionsByEntity();
    const rabbitHolesByEntity = await loadAllRabbitHolesByEntity();

    const sitemapEntries = [
        {
            loc: `${SITE_URL}/`,
            lastmod: new Date().toISOString().slice(0, 10),
            priority: "1.0"
        }
    ];

    for (const category of CATEGORY_CATALOG) {
        sitemapEntries.push({
            loc: `/category/${category.id}`,
            lastmod: new Date().toISOString().slice(0, 10),
            priority: "0.9"
        });
    }

    let written = 0;
    for (const page of pagesResult.rows) {
        const connections = page.entity_id
            ? connectionsByEntity.get(page.entity_id) || []
            : [];
        const rabbitHoles = page.entity_id
            ? rabbitHolesByEntity.get(page.entity_id) || []
            : [];
        const payload = buildPagePayload(page, connections, rabbitHoles);

        const rel = slugToRelativeDir(page.slug);
        if (!rel) {
            continue;
        }

        writeJson(
            path.join(targetDir, "data", "pages", `${rel}.json`),
            payload
        );

        if (writeHtml) {
            const trail = [{ label: "Home", href: `${SITE_URL}/` }];
            if (payload.subject) {
                const catId = payload.subject.categories?.[0];
                const cat = CATEGORY_CATALOG.find((entry) => entry.id === catId);
                if (cat) {
                    trail.push({
                        label: cat.label,
                        href: `${SITE_URL}/category/${cat.id}`
                    });
                }
                if (payload.page.slug !== payload.subject.path) {
                    trail.push({
                        label: payload.subject.name,
                        href: absoluteCanonical(SITE_URL, payload.subject.path)
                    });
                }
            }
            trail.push({ label: payload.entity.name });

            writeText(
                path.join(targetDir, rel, "index.html"),
                buildEntityPageHtml({
                    siteUrl: SITE_URL,
                    page: {
                        slug: payload.page.slug,
                        title: payload.page.title,
                        meta_title: payload.page.meta_title,
                        meta_description: payload.page.meta_description,
                        content: payload.page.content,
                        entity_name: payload.entity.name,
                        entity_type: payload.entity.type,
                        short_description: payload.entity.short_description,
                        description: payload.entity.description,
                        image_url: payload.entity.image_url,
                        image_alt: payload.entity.image_alt
                    },
                    connections,
                    trail
                })
            );
        }

        sitemapEntries.push({
            loc: page.slug,
            lastmod: new Date(page.updated_at).toISOString().slice(0, 10),
            priority: String(page.slug).split("/").length <= 2 ? "0.8" : "0.6"
        });

        written += 1;
        if (written % 100 === 0) {
            console.log(`  … ${written}/${pagesResult.rows.length}`);
        }
    }

    // Category HTML shelves (always — tiny, crawlable)
    for (const category of CATEGORY_CATALOG) {
        const subjects = catalog.subjects
            .filter((subject) =>
                (subject.categories || []).includes(category.id)
            )
            .sort(
                (a, b) =>
                    (b.entity_count || 0) - (a.entity_count || 0) ||
                    a.name.localeCompare(b.name)
            );

        if (!subjects.length) {
            continue;
        }

        writeText(
            path.join(targetDir, "category", category.id, "index.html"),
            buildCategoryHtml({
                siteUrl: SITE_URL,
                category,
                subjects
            })
        );
    }

    // Static home with full subject link list (SEO + no-API browse)
    writeText(
        path.join(targetDir, "index.static.html"),
        buildHomeHtml({
            siteUrl: SITE_URL,
            categories: CATEGORY_CATALOG.map((category) => ({
                ...category,
                subjects: catalog.subjects.filter((subject) =>
                    (subject.categories || []).includes(category.id)
                )
            })).filter((category) => category.subjects.length > 0)
        })
    );

    writeText(
        path.join(targetDir, "404.static.html"),
        buildNotFoundHtml({ siteUrl: SITE_URL })
    );

    writeText(
        path.join(targetDir, "robots.txt"),
        buildRobotsTxt(SITE_URL)
    );
    writeText(
        path.join(targetDir, "sitemap.xml"),
        buildSitemapXml(SITE_URL, sitemapEntries)
    );

    console.log(`Wrote ${written} page JSON files`);
    console.log(`robots.txt + sitemap.xml (${sitemapEntries.length} urls)`);
    console.log("Done.");
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(async () => {
        try {
            await pool.end();
        } catch {
            // ignore
        }
    });
