/** Refresh docs/data/subjects.json from registry + DB counts. */
require("../../server/src/config/env");
const fs = require("fs");
const path = require("path");
const {
    listSubjectMeta,
    CATEGORY_CATALOG
} = require("../subjects/registry");
const { query, pool } = require("../../server/src/db");

async function main() {
    const result = await query(`
        SELECT
            metadata->>'universe' AS id,
            COUNT(*)::int AS entity_count
        FROM entities
        WHERE metadata->>'universe' IS NOT NULL
        GROUP BY metadata->>'universe'
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
    const catalog = { categories: CATEGORY_CATALOG, subjects };
    const root = path.join(__dirname, "..", "..");
    for (const dir of ["docs", ""]) {
        const base = path.join(root, dir, "data");
        fs.mkdirSync(base, { recursive: true });
        fs.writeFileSync(
            path.join(base, "subjects.json"),
            JSON.stringify(catalog)
        );
    }
    console.log(
        `subjects ${subjects.length}; music ${subjects.filter((s) => (s.categories || []).includes("music")).length}`
    );
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
