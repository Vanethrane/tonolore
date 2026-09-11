/**
 * Continuous subject growth worker.
 *
 * Rotates subjects forever: discover a small batch of new Fandom pages
 * (with rich intros) → seed Postgres (re-checks thin blurbs) → generate
 * canonical pages → sleep → next subject.
 * Tuned to stay under wiki rate limits. Stop with Ctrl+C.
 *
 *   node scripts/growSubjects.js
 *   node scripts/growSubjects.js --batch=40 --delay=200 --pause=45
 *   node scripts/growSubjects.js --subjects=one-piece,pokemon --wiki-every=12
 *
 * State: scripts/.grow-state.json (resume-safe)
 */

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const {
    getExpandConfig,
    listExpandableSubjects
} = require("./lib/subjectExpandConfigs");
const { expandFandomPass } = require("./lib/expandFandomPass");
const { sleep } = require("./lib/fandomClient");
const { seedSubject } = require("./lib/seedRunner");

const ROOT = path.join(__dirname, "..");
const STATE_PATH = path.join(__dirname, ".grow-state.json");

function parseArgs(argv) {
    const getNum = (name, fallback) => {
        const raw = argv.find((arg) => arg.startsWith(`--${name}=`));
        if (!raw) {
            return fallback;
        }
        const value = Number(raw.slice(name.length + 3));
        return Number.isFinite(value) ? value : fallback;
    };

    const subjectsRaw = argv.find((arg) => arg.startsWith("--subjects="));
    const subjects = subjectsRaw
        ? subjectsRaw
              .slice("--subjects=".length)
              .split(",")
              .map((part) => part.trim())
              .filter(Boolean)
        : listExpandableSubjects().filter((id) => getExpandConfig(id)?.fandom);

    return {
        batch: getNum("batch", 35),
        delayMs: getNum("delay", 200),
        pauseSec: getNum("pause", 40),
        betweenSubjectSec: getNum("between", 8),
        wikiEvery: getNum("wiki-every", 10),
        pageConcurrency: String(getNum("page-concurrency", 4)),
        subjects,
        // Intros on by default so discovered pages never ship as
        // "X is documented on wiki.fandom.com." stubs.
        withIntros: !argv.includes("--skip-intros"),
        skipWiki: argv.includes("--skip-wiki")
    };
}

function loadState() {
    if (!fs.existsSync(STATE_PATH)) {
        return {
            subjectIndex: 0,
            cycle: 0,
            subjects: {}
        };
    }

    try {
        return JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
    } catch {
        return {
            subjectIndex: 0,
            cycle: 0,
            subjects: {}
        };
    }
}

function saveState(state) {
    const payload = JSON.stringify(state, null, 2);
    const tmp = `${STATE_PATH}.${process.pid}.tmp`;
    for (let attempt = 0; attempt < 5; attempt += 1) {
        try {
            fs.writeFileSync(tmp, payload);
            fs.renameSync(tmp, STATE_PATH);
            return;
        } catch (error) {
            if (attempt === 4) {
                console.warn(
                    `[grow] could not persist state (${error.message}) — continuing`
                );
                try {
                    fs.unlinkSync(tmp);
                } catch (_) {
                    /* ignore */
                }
                return;
            }
            const end = Date.now() + 300;
            while (Date.now() < end) {
                /* brief backoff for Windows file locks */
            }
        }
    }
}

function bustSubjectCache(subjectId) {
    const needle = `${path.sep}subjects${path.sep}${subjectId}${path.sep}`;
    const needleAlt = `/subjects/${subjectId}/`;

    for (const key of Object.keys(require.cache)) {
        if (key.includes(needle) || key.includes(needleAlt)) {
            delete require.cache[key];
        }
    }
}

function countExpanded(subjectId) {
    const file = path.join(
        __dirname,
        "subjects",
        subjectId,
        "expanded.json"
    );

    if (!fs.existsSync(file)) {
        return { entities: 0, enrichments: 0 };
    }

    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    return {
        entities: (data.entities || []).length,
        enrichments: (data.enrichments || []).length
    };
}

function runNodeScript(scriptPath, args, env = {}) {
    return new Promise((resolve, reject) => {
        const child = spawn(
            process.execPath,
            [scriptPath, ...args],
            {
                cwd: ROOT,
                stdio: "inherit",
                env: { ...process.env, ...env }
            }
        );

        child.on("error", reject);
        child.on("exit", (code, signal) => {
            if (signal) {
                reject(new Error(`${path.basename(scriptPath)} killed (${signal})`));
                return;
            }
            if (code !== 0) {
                reject(
                    new Error(
                        `${path.basename(scriptPath)} exited with code ${code}`
                    )
                );
                return;
            }
            resolve();
        });
    });
}

async function runWikiPass(subjectId) {
    console.log("\n--- Wikipedia / Wikidata refresh ---");
    await runNodeScript(path.join(__dirname, "expandSubjectDeep.js"), [
        subjectId,
        "--skip-images"
    ]);
}

async function seedSubjectFresh(subjectId) {
    bustSubjectCache(subjectId);
    const subject = require(path.join(__dirname, "subjects", subjectId));
    await seedSubject(subject, { silent: false });
}

async function generatePages(subjectId, pageConcurrency) {
    await runNodeScript(
        path.join(__dirname, "generate", "pages", "generatePages.js"),
        [subjectId],
        { PAGE_GEN_CONCURRENCY: pageConcurrency }
    );
}

async function growTick(subjectId, opts, subjectState) {
    const before = countExpanded(subjectId);
    const visits = Number(subjectState.visits || 0) + 1;
    const shouldWiki =
        !opts.skipWiki &&
        opts.wikiEvery > 0 &&
        visits % opts.wikiEvery === 0;

    console.log("\n" + "=".repeat(64));
    console.log(
        `[grow] ${subjectId} · visit #${visits} · batch ${opts.batch} · delay ${opts.delayMs}ms`
    );
    console.log(
        `[grow] expanded.json before: ${before.entities} entities, ${before.enrichments} enrichments`
    );

    if (shouldWiki) {
        try {
            await runWikiPass(subjectId);
            subjectState.lastWikiAt = new Date().toISOString();
        } catch (error) {
            console.warn(`[grow] wiki pass failed: ${error.message}`);
            await sleep(15000);
        }
    }

    console.log("\n--- Fandom discover (new titles only) ---");
    let created = 0;
    try {
        const result = await expandFandomPass(subjectId, {
            limit: opts.batch,
            onlyNew: true,
            delayMs: opts.delayMs,
            batchSize: 40,
            skipIntros: !opts.withIntros,
            withIntros: opts.withIntros
        });
        created = Number(result?.stats?.fandom_created || 0);
    } catch (error) {
        console.warn(`[grow] fandom pass failed: ${error.message}`);
        if (/429/.test(error.message)) {
            console.warn("[grow] rate limited — cooling down 90s");
            await sleep(90000);
        } else {
            await sleep(20000);
        }
        throw error;
    }

    const after = countExpanded(subjectId);
    const entityDelta = after.entities - before.entities;
    const enrichmentDelta = after.enrichments - before.enrichments;
    console.log(
        `[grow] expanded.json after: ${after.entities} entities (+${entityDelta}), enrichments (+${enrichmentDelta})`
    );

    if (entityDelta <= 0 && enrichmentDelta <= 0 && !shouldWiki) {
        console.log(
            "[grow] no new data this tick — skipping seed/generate to stay polite"
        );
    } else {
        console.log("\n--- Seed ---");
        await seedSubjectFresh(subjectId);

        console.log("\n--- Generate pages ---");
        await generatePages(subjectId, opts.pageConcurrency);
    }

    subjectState.visits = visits;
    subjectState.lastRunAt = new Date().toISOString();
    subjectState.lastCreated = created;
    subjectState.lastEntityCount = after.entities;

    return { created, before, after };
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));

    if (!opts.subjects.length) {
        console.error("No expandable subjects with a fandom block configured.");
        process.exit(1);
    }

    let stopping = false;
    const requestStop = (signal) => {
        if (stopping) {
            return;
        }
        stopping = true;
        console.log(
            `\n[grow] ${signal} received — finishing current subject, then exiting.`
        );
    };

    process.on("SIGINT", () => requestStop("SIGINT"));
    process.on("SIGTERM", () => requestStop("SIGTERM"));

    const state = loadState();
    if (!state.subjects) {
        state.subjects = {};
    }

    console.log("[grow] Continuous subject growth");
    console.log(`[grow] subjects: ${opts.subjects.join(", ")}`);
    console.log(
        `[grow] batch=${opts.batch} delay=${opts.delayMs}ms pause=${opts.pauseSec}s between=${opts.betweenSubjectSec}s wikiEvery=${opts.wikiEvery}`
    );
    console.log("[grow] stop with Ctrl+C\n");

    while (!stopping) {
        if (state.subjectIndex >= opts.subjects.length) {
            state.subjectIndex = 0;
            state.cycle = Number(state.cycle || 0) + 1;
            console.log(`\n[grow] completed cycle #${state.cycle}`);
            saveState(state);
            if (!stopping) {
                console.log(
                    `[grow] resting ${opts.pauseSec}s before next cycle…`
                );
                await sleep(opts.pauseSec * 1000);
            }
            continue;
        }

        const subjectId = opts.subjects[state.subjectIndex];
        state.subjects[subjectId] = state.subjects[subjectId] || {};

        try {
            await growTick(subjectId, opts, state.subjects[subjectId]);
            saveState(state);
        } catch (error) {
            console.error(`[grow] tick failed for ${subjectId}:`, error.message);
            saveState(state);
            if (!stopping) {
                await sleep(30000);
            }
        }

        state.subjectIndex += 1;
        saveState(state);

        if (!stopping && state.subjectIndex < opts.subjects.length) {
            console.log(
                `[grow] waiting ${opts.betweenSubjectSec}s before next subject…`
            );
            await sleep(opts.betweenSubjectSec * 1000);
        }
    }

    saveState(state);
    console.log("[grow] stopped cleanly.");
}

main().catch((error) => {
    console.error("[grow] fatal:", error);
    process.exit(1);
});
