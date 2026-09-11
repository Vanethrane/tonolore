/**
 * One-shot volume buff for thin subjects that have expand configs.
 * Discovers Fandom/Wikipedia entities, seeds Postgres, generates pages.
 *
 *   node scripts/maintenance/buffThinSubjects.js
 *   node scripts/maintenance/buffThinSubjects.js --limit=120 --max-subjects=20
 *   node scripts/maintenance/buffThinSubjects.js --threshold=80 --subjects=marvel,star-trek
 *   node scripts/maintenance/buffThinSubjects.js --skip-wiki
 */

require("../../server/src/config/env");

const { spawnSync } = require("child_process");
const path = require("path");
const { Client } = require("../../server/node_modules/pg");
const {
    getExpandConfig,
    listExpandableSubjects
} = require("../lib/subjectExpandConfigs");
const { expandFandomPass } = require("../lib/expandFandomPass");

const root = path.join(__dirname, "..", "..");

function parseArgs(argv) {
    const getNum = (name, fallback) => {
        const raw = argv.find((arg) => arg.startsWith(`--${name}=`));
        if (!raw) return fallback;
        const value = Number(raw.slice(name.length + 3));
        return Number.isFinite(value) ? value : fallback;
    };
    const subjectsRaw = argv.find((arg) => arg.startsWith("--subjects="));
    return {
        limit: getNum("limit", 100),
        threshold: getNum("threshold", 100),
        maxSubjects: getNum("max-subjects", 40),
        skipWiki: argv.includes("--skip-wiki"),
        subjects: subjectsRaw
            ? subjectsRaw
                  .slice("--subjects=".length)
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean)
            : null
    };
}

function run(label, args) {
    console.log(`\n>>> ${label}`);
    const result = spawnSync(process.execPath, args, {
        cwd: root,
        stdio: "inherit",
        env: process.env
    });
    if (result.status !== 0) {
        throw new Error(`${label} failed (${result.status})`);
    }
}

async function loadThinSubjects(threshold, only) {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();
    try {
        const result = await client.query(`
            SELECT metadata->>'universe' AS id, COUNT(*)::int AS n
            FROM entities
            WHERE metadata->>'universe' IS NOT NULL
            GROUP BY 1
            ORDER BY n ASC
        `);
        const expandable = new Set(listExpandableSubjects());
        return result.rows
            .filter((row) => expandable.has(row.id) && row.n <= threshold)
            .filter((row) => !only || only.includes(row.id))
            .map((row) => ({
                id: row.id,
                n: row.n,
                hasFandom: Boolean(getExpandConfig(row.id)?.fandom)
            }));
    } finally {
        await client.end();
    }
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));
    const thin = (await loadThinSubjects(opts.threshold, opts.subjects)).slice(
        0,
        opts.maxSubjects
    );

    console.log(
        `Buffing ${thin.length} subjects (threshold<=${opts.threshold}, limit=${opts.limit})`
    );
    for (const row of thin) {
        console.log(`  ${row.n}\t${row.id}${row.hasFandom ? "" : " [wiki]"}`);
    }

    const summary = [];

    for (const row of thin) {
        const id = row.id;
        const config = getExpandConfig(id);
        console.log("\n" + "#".repeat(72));
        console.log(`# BUFF ${id} (was ${row.n})`);
        console.log("#".repeat(72));

        try {
            if (!opts.skipWiki) {
                try {
                    run(`wiki ${id}`, [
                        path.join("scripts", "expandSubjectDeep.js"),
                        id,
                        "--skip-images"
                    ]);
                } catch (wikiError) {
                    console.warn(
                        `[buff] wiki pass soft-fail for ${id}: ${wikiError.message}`
                    );
                }
            }

            if (config.fandom) {
                await expandFandomPass(id, {
                    limit: opts.limit,
                    onlyNew: true,
                    delayMs: 140,
                    skipIntros: false
                });
            } else if (opts.skipWiki) {
                run(`wiki ${id}`, [
                    path.join("scripts", "expandSubjectDeep.js"),
                    id,
                    "--skip-images"
                ]);
            }

            run(`seed ${id}`, [
                path.join("scripts", "seedSubject.js"),
                id,
                "--skip-rich-intros"
            ]);
            run(`pages ${id}`, [
                path.join("scripts", "generate", "pages", "generatePages.js"),
                id
            ]);
            summary.push({ id, ok: true });
        } catch (error) {
            console.error(`[buff] ${id} failed:`, error.message);
            summary.push({ id, ok: false, error: error.message });
        }
    }

    console.log("\n=== BUFF SUMMARY ===");
    for (const row of summary) {
        console.log(`${row.ok ? "OK" : "FAIL"}\t${row.id}${row.error ? ` — ${row.error}` : ""}`);
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
