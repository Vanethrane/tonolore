require("../../server/src/config/env");
const fs = require("fs");
const path = require("path");
const { query, pool } = require("../../server/src/db");

async function main() {
    const docs = path.join(__dirname, "..", "..", "docs");
    const pagesDir = path.join(docs, "data", "pages");
    const published = await query(
        "SELECT p.slug FROM pages p WHERE p.status = 'published'"
    );
    let missingJson = 0;
    let missingShell = 0;
    const samplesJson = [];
    const samplesShell = [];
    for (const row of published.rows) {
        const slug = String(row.slug || "").replace(/^\/+|\/+$/g, "");
        if (!fs.existsSync(path.join(pagesDir, `${slug}.json`))) {
            missingJson += 1;
            if (samplesJson.length < 10) {
                samplesJson.push(slug);
            }
        }
        if (!fs.existsSync(path.join(docs, slug, "index.html"))) {
            missingShell += 1;
            if (samplesShell.length < 10) {
                samplesShell.push(slug);
            }
        }
    }
    const dangling = await query(`
        SELECT COUNT(*)::int AS n
        FROM relationships r
        JOIN entities tgt ON tgt.id = r.to_entity_id
        LEFT JOIN pages tp ON tp.entity_id = tgt.id AND tp.status = 'published'
        WHERE tp.id IS NULL
    `);
    console.log(
        JSON.stringify(
            {
                published: published.rows.length,
                missingJson,
                missingShell,
                samplesJson,
                samplesShell,
                relationshipsToUnpublishedTargets: dangling.rows[0].n
            },
            null,
            2
        )
    );
    await pool.end();
}

main().catch((error) => {
    console.error(error);
    pool.end().finally(() => process.exit(1));
});
