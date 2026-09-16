require("../server/src/config/env");
const { query, pool } = require("../server/src/db");
const fs = require("fs");
const path = require("path");

async function main() {
    const pages = await query(
        `SELECT COUNT(*)::int AS n FROM pages WHERE status = 'published'`
    );
    const entities = await query(`SELECT COUNT(*)::int AS n FROM entities`);
    const missingImages = await query(
        `SELECT COUNT(*)::int AS n FROM entities WHERE image_url IS NULL OR BTRIM(image_url) = ''`
    );
    const thinish = await query(
        `SELECT COUNT(*)::int AS n FROM entities WHERE description IS NULL OR length(description) < 550`
    );

    let seedDone = 0;
    const seedPath = path.join(__dirname, ".seed-depth-fill-state.json");
    if (fs.existsSync(seedPath)) {
        try {
            seedDone = (JSON.parse(fs.readFileSync(seedPath, "utf8")).completed || [])
                .length;
        } catch (_) {
            /* ignore */
        }
    }

    const snapshot = {
        at: new Date().toISOString(),
        pages: pages.rows[0].n,
        entities: entities.rows[0].n,
        missingImages: missingImages.rows[0].n,
        thinish: thinish.rows[0].n,
        seedDepthFillCompleted: seedDone
    };

    const out = path.join(__dirname, ".fill-status-baseline.json");
    fs.writeFileSync(out, JSON.stringify(snapshot, null, 2));
    console.log(JSON.stringify(snapshot, null, 2));
    await pool.end();
}

main().catch((error) => {
    console.error(error);
    pool.end().finally(() => process.exit(1));
});
