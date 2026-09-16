/**
 * Reassign satellite subject entities into Marvel/DC universes in Postgres,
 * then re-seed Marvel + DC so parents and hubs win.
 *
 *   node scripts/maintenance/absorbBigTwoSatellites.js
 */

require("../../server/src/config/env");

const path = require("path");
const { spawnSync } = require("child_process");
const { pool, query } = require("../../server/src/db");
const {
    MARVEL_SATELLITE_SUBJECT_IDS,
    DC_SATELLITE_SUBJECT_IDS
} = require("../subjects/bigTwoUniverse");
const { seedSubject } = require("../lib/seedRunner");

const ROOT = path.join(__dirname, "..", "..");

async function absorb(universe, satellites) {
    const result = await query(
        `
        UPDATE entities
        SET
            metadata = jsonb_set(
                COALESCE(metadata, '{}'::jsonb),
                '{universe}',
                to_jsonb($1::text),
                true
            ),
            updated_at = NOW()
        WHERE metadata->>'universe' = ANY($2::text[])
        RETURNING slug
        `,
        [universe, satellites]
    );
    console.log(
        `[absorb] ${universe}: reassigned ${result.rowCount} entities from ${satellites.join(", ")}`
    );
}

async function main() {
    await absorb("marvel", MARVEL_SATELLITE_SUBJECT_IDS);
    await absorb("dc", DC_SATELLITE_SUBJECT_IDS);

    for (const id of ["marvel", "dc"]) {
        console.log(`\n[seed] ${id}`);
        // bust cache
        const needle = `${path.sep}subjects${path.sep}${id}${path.sep}`;
        for (const key of Object.keys(require.cache)) {
            if (key.includes(needle)) {
                delete require.cache[key];
            }
        }
        const subject = require(path.join(ROOT, "scripts", "subjects", id));
        await seedSubject(subject, { skipRichIntros: true });
        const gen = spawnSync(
            process.execPath,
            [
                path.join(ROOT, "scripts", "generate", "pages", "generatePages.js"),
                id,
                "--only-missing"
            ],
            { cwd: ROOT, stdio: "inherit", env: process.env }
        );
        if (gen.status !== 0) {
            throw new Error(`generatePages ${id} failed`);
        }
    }

    console.log("\n[absorb] done — grow Marvel/DC next for ancillary depth");
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
