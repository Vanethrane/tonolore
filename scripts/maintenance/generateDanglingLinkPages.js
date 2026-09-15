require("../../server/src/config/env");
const path = require("path");
const { spawnSync } = require("child_process");
const { query, pool } = require("../../server/src/db");

async function main() {
    const result = await query(`
        SELECT DISTINCT COALESCE(tgt.metadata->>'universe', '') AS universe
        FROM relationships rel
        JOIN entities tgt ON tgt.id = rel.to_entity_id
        LEFT JOIN pages tp ON tp.entity_id = tgt.id AND tp.status = 'published'
        WHERE tp.id IS NULL
          AND COALESCE(tgt.metadata->>'universe', '') <> ''
        ORDER BY 1
    `);
    console.log(`Universes with unpublished link targets: ${result.rows.length}`);
    for (const row of result.rows) {
        console.log(`generatePages --only-missing ${row.universe}`);
        const run = spawnSync(
            process.execPath,
            [
                path.join(__dirname, "..", "generate", "pages", "generatePages.js"),
                row.universe,
                "--only-missing"
            ],
            { stdio: "inherit", env: process.env }
        );
        console.log(`exit ${run.status}`);
    }
    await pool.end();
}

main().catch((error) => {
    console.error(error);
    pool.end().finally(() => process.exit(1));
});
