/**
 * Refresh search-index.json + sitemap.xml entries for expansion subjects
 * without a full site export.
 *   node scripts/maintenance/refreshExpansionSearchSitemap.js
 */
require("../../server/src/config/env");

const fs = require("fs");
const path = require("path");
const { query, pool } = require("../../server/src/db");
const { expansionSubjectIds } = require("../subjects/expansionCatalog");
const { CATEGORY_CATALOG } = require("../subjects/registry");
const { buildSitemapXml, absoluteCanonical } = require("../lib/staticSeo");

const SITE_URL = (
    process.env.SITE_URL ||
    "https://www.tonolore.com"
).replace(/\/+$/, "");
const root = path.join(__dirname, "..", "..");
const docs = path.join(root, "docs");

async function main() {
    const indexPath = path.join(docs, "data", "search-index.json");
    const existing = fs.existsSync(indexPath)
        ? JSON.parse(fs.readFileSync(indexPath, "utf8"))
        : { entities: [] };

    const byId = new Map(
        (existing.entities || []).map((entity) => [entity.id, entity])
    );

    const result = await query(
        `
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
          AND COALESCE(e.metadata->>'universe', '') = ANY($1::text[])
        ORDER BY e.name
        `,
        [expansionSubjectIds()]
    );

    for (const row of result.rows) {
        const metadata =
            typeof row.metadata === "string"
                ? JSON.parse(row.metadata)
                : row.metadata || {};
        byId.set(row.id, {
            id: row.id,
            name: row.name,
            type: row.type,
            slug: row.slug,
            path: row.page_slug,
            short_description: row.short_description,
            aliases: Array.isArray(metadata.aliases) ? metadata.aliases : []
        });
    }

    const entities = [...byId.values()].sort((a, b) =>
        a.name.localeCompare(b.name)
    );
    fs.writeFileSync(
        indexPath,
        JSON.stringify({
            generated_at: new Date().toISOString(),
            count: entities.length,
            entities
        })
    );

    const pages = await query(`
        SELECT p.slug, COALESCE(p.updated_at, p.created_at) AS updated_at
        FROM pages p
        WHERE p.status = 'published'
        ORDER BY p.slug
    `);

    const entries = [
        {
            loc: `${SITE_URL}/`,
            lastmod: new Date().toISOString().slice(0, 10),
            priority: "1.0"
        },
        ...CATEGORY_CATALOG.map((category) => ({
            loc: `/category/${category.id}`,
            lastmod: new Date().toISOString().slice(0, 10),
            priority: "0.9"
        })),
        ...pages.rows.map((page) => ({
            loc: absoluteCanonical(SITE_URL, page.slug),
            lastmod: new Date(page.updated_at).toISOString().slice(0, 10),
            priority: "0.7"
        }))
    ];

    fs.writeFileSync(path.join(docs, "sitemap.xml"), buildSitemapXml(SITE_URL, entries));
    fs.writeFileSync(
        path.join(docs, "robots.txt"),
        `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`
    );

    console.log(
        `search-index: ${entities.length}; sitemap urls: ${entries.length}`
    );
    await pool.end();
}

main().catch((error) => {
    console.error(error);
    pool.end().finally(() => process.exit(1));
});
