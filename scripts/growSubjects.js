/**
 * Continuous subject growth worker.
 *
 * Rotates every Fandom category list forever: discover ONE new page →
 * seed Postgres → generate only missing pages → next list.
 * Tuned to stay under wiki rate limits by never hammering one host.
 * Stop with Ctrl+C, or auto-stop at --target-pages.
 *
 *   node scripts/growSubjects.js
 *   node scripts/growSubjects.js --batch=1 --target-pages=500000
 *   node scripts/growSubjects.js --subjects=one-piece,pokemon --delay=250
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
        // One page per list tick by default — rotate hosts/lists instead of
        // bursting a single wiki.
        batch: getNum("batch", 1),
        delayMs: getNum("delay", 220),
        pauseSec: getNum("pause", 20),
        betweenSubjectSec: getNum("between", 4),
        wikiEvery: getNum("wiki-every", 0),
        pageConcurrency: String(getNum("page-concurrency", 2)),
        targetPages: getNum("target-pages", 500000),
        categoryMaxPages: getNum("category-max", 50000),
        subjects,
        withIntros: !argv.includes("--skip-intros"),
        skipWiki: argv.includes("--skip-wiki") || getNum("wiki-every", 0) === 0,
        forever: argv.includes("--forever")
    };
}

function buildListQueue(subjectIds) {
    const queue = [];
    for (const subjectId of subjectIds) {
        const config = getExpandConfig(subjectId);
        const categories = config?.fandom?.categories || [];
        if (!categories.length) {
            continue;
        }
        for (let i = 0; i < categories.length; i += 1) {
            queue.push({
                subjectId,
                categoryIndex: i,
                categoryTitle: categories[i].title,
                host: config.fandom.host
            });
        }
    }
    return queue;
}

function loadState() {
    if (!fs.existsSync(STATE_PATH)) {
        return {
            listIndex: 0,
            cycle: 0,
            subjects: {},
            createdTotal: 0
        };
    }

    try {
        const state = JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
        if (typeof state.listIndex !== "number") {
            // Migrate older subjectIndex state into list rotation.
            state.listIndex = 0;
        }
        if (!state.subjects) {
            state.subjects = {};
        }
        if (typeof state.createdTotal !== "number") {
            state.createdTotal = 0;
        }
        return state;
    } catch {
        return {
            listIndex: 0,
            cycle: 0,
            subjects: {},
            createdTotal: 0
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
        return { entities: 0, enrichments: 0, slugs: new Set() };
    }

    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    return {
        entities: (data.entities || []).length,
        enrichments: (data.enrichments || []).length,
        slugs: new Set((data.entities || []).map((row) => row.slug))
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

async function countDbPages() {
    // Lazy-require so --help / dry config work without DATABASE_URL.
    require("../server/src/config/env");
    const { query } = require("../server/src/db");
    const result = await query("SELECT COUNT(*)::int AS n FROM pages");
    return result.rows[0].n;
}

async function runWikiPass(subjectId) {
    console.log("\n--- Wikipedia / Wikidata refresh ---");
    await runNodeScript(path.join(__dirname, "expandSubjectDeep.js"), [
        subjectId,
        "--skip-images"
    ]);
}

async function seedSubjectFresh(subjectId, onlySlugs = null) {
    bustSubjectCache(subjectId);
    const subject = require(path.join(__dirname, "subjects", subjectId));
    if (onlySlugs && onlySlugs.size) {
        const keep = new Set(onlySlugs);
        keep.add(subject.rootSlug);
        const entities = (subject.entities || []).filter((entity) =>
            keep.has(entity.slug)
        );
        const relationships = (subject.relationships || []).filter(
            (row) => keep.has(row[0]) && keep.has(row[1])
        );
        await seedSubject(
            { ...subject, entities, relationships },
            { silent: false, skipRichIntros: false }
        );
        return;
    }
    await seedSubject(subject, { silent: false });
}

async function generatePages(subjectId, pageConcurrency) {
    await runNodeScript(
        path.join(__dirname, "generate", "pages", "generatePages.js"),
        [subjectId, "--only-missing"],
        { PAGE_GEN_CONCURRENCY: pageConcurrency }
    );
}

async function growTick(entry, opts, subjectState) {
    const { subjectId, categoryTitle } = entry;
    const config = getExpandConfig(subjectId);
    const category = (config?.fandom?.categories || [])[entry.categoryIndex];
    if (!category) {
        console.warn(
            `[grow] missing category index ${entry.categoryIndex} for ${subjectId}`
        );
        return { created: 0, before: countExpanded(subjectId), after: countExpanded(subjectId) };
    }

    const before = countExpanded(subjectId);
    const visits = Number(subjectState.visits || 0) + 1;
    const shouldWiki =
        !opts.skipWiki &&
        opts.wikiEvery > 0 &&
        visits % opts.wikiEvery === 0;

    console.log("\n" + "=".repeat(64));
    console.log(
        `[grow] ${subjectId} · list "${categoryTitle}" · visit #${visits} · batch ${opts.batch}`
    );
    console.log(
        `[grow] host ${entry.host} · expanded before: ${before.entities} entities`
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

    console.log("\n--- Fandom discover (one list, new titles only) ---");
    let created = 0;
    try {
        const result = await expandFandomPass(subjectId, {
            limit: opts.batch,
            onlyNew: true,
            delayMs: opts.delayMs,
            batchSize: Math.max(1, Math.min(10, opts.batch)),
            skipIntros: !opts.withIntros,
            withIntros: opts.withIntros,
            categories: [category],
            categoryMaxPages: opts.categoryMaxPages
        });
        created = Number(result?.stats?.fandom_created || 0);
    } catch (error) {
        console.warn(`[grow] fandom pass failed: ${error.message}`);
        if (/429/.test(error.message)) {
            console.warn("[grow] rate limited — cooling down 120s");
            await sleep(120000);
        } else {
            await sleep(20000);
        }
        throw error;
    }

    const after = countExpanded(subjectId);
    const entityDelta = after.entities - before.entities;
    const enrichmentDelta = after.enrichments - before.enrichments;
    console.log(
        `[grow] expanded after: ${after.entities} entities (+${entityDelta}), enrichments (+${enrichmentDelta}), created ${created}`
    );

    if (entityDelta <= 0 && enrichmentDelta <= 0 && !shouldWiki) {
        console.log(
            "[grow] no new data this tick — skipping seed/generate to stay polite"
        );
    } else {
        const newSlugs = [...after.slugs].filter(
            (slug) => !before.slugs.has(slug)
        );
        console.log("\n--- Seed ---");
        if (newSlugs.length && newSlugs.length <= opts.batch * 3) {
            await seedSubjectFresh(subjectId, new Set(newSlugs));
        } else {
            await seedSubjectFresh(subjectId);
        }

        console.log("\n--- Generate pages (only-missing) ---");
        await generatePages(subjectId, opts.pageConcurrency);
    }

    subjectState.visits = visits;
    subjectState.lastRunAt = new Date().toISOString();
    subjectState.lastCreated = created;
    subjectState.lastEntityCount = after.entities;
    subjectState.lastList = categoryTitle;

    return { created, before, after, entityDelta };
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));
    const listQueue = buildListQueue(opts.subjects);

    if (!listQueue.length) {
        console.error("No expandable subjects with fandom category lists.");
        process.exit(1);
    }

    let stopping = false;
    const requestStop = (signal) => {
        if (stopping) {
            return;
        }
        stopping = true;
        console.log(
            `\n[grow] ${signal} received — finishing current list, then exiting.`
        );
    };

    process.on("SIGINT", () => requestStop("SIGINT"));
    process.on("SIGTERM", () => requestStop("SIGTERM"));

    const state = loadState();
    if (state.listIndex >= listQueue.length) {
        state.listIndex = 0;
    }

    let pageCount = 0;
    try {
        pageCount = await countDbPages();
    } catch (error) {
        console.warn(`[grow] could not read page count: ${error.message}`);
    }

    console.log("[grow] Continuous list growth (1 page / list tick)");
    console.log(
        `[grow] ${opts.subjects.length} subjects · ${listQueue.length} category lists`
    );
    console.log(
        `[grow] batch=${opts.batch} delay=${opts.delayMs}ms between=${opts.betweenSubjectSec}s pause=${opts.pauseSec}s`
    );
    console.log(
        `[grow] pages now ${pageCount}` +
            (opts.targetPages > 0
                ? ` · target ${opts.targetPages}`
                : " · no target (run forever)")
    );
    console.log("[grow] stop with Ctrl+C\n");

    while (!stopping) {
        if (
            opts.targetPages > 0 &&
            !opts.forever &&
            pageCount >= opts.targetPages
        ) {
            console.log(
                `\n[grow] reached target ${pageCount}/${opts.targetPages} pages — stopping.`
            );
            break;
        }

        if (state.listIndex >= listQueue.length) {
            state.listIndex = 0;
            state.cycle = Number(state.cycle || 0) + 1;
            console.log(`\n[grow] completed list cycle #${state.cycle}`);
            try {
                pageCount = await countDbPages();
                console.log(
                    `[grow] progress ${pageCount}` +
                        (opts.targetPages
                            ? `/${opts.targetPages}`
                            : "") +
                        ` pages (+${state.createdTotal} created this run)`
                );
            } catch (_) {
                /* ignore */
            }
            saveState(state);
            if (!stopping) {
                console.log(
                    `[grow] resting ${opts.pauseSec}s before next cycle…`
                );
                await sleep(opts.pauseSec * 1000);
            }
            continue;
        }

        const entry = listQueue[state.listIndex];
        state.subjects[entry.subjectId] = state.subjects[entry.subjectId] || {};

        try {
            const result = await growTick(
                entry,
                opts,
                state.subjects[entry.subjectId]
            );
            state.createdTotal += Number(result.created || 0);
            if (result.entityDelta > 0) {
                try {
                    pageCount = await countDbPages();
                    console.log(
                        `[grow] pages ${pageCount}` +
                            (opts.targetPages
                                ? `/${opts.targetPages}`
                                : "")
                    );
                } catch (_) {
                    /* ignore */
                }
            }
            saveState(state);
        } catch (error) {
            console.error(
                `[grow] tick failed for ${entry.subjectId}/${entry.categoryTitle}:`,
                error.message
            );
            saveState(state);
            if (!stopping) {
                await sleep(30000);
            }
        }

        state.listIndex += 1;
        saveState(state);

        if (!stopping && state.listIndex < listQueue.length) {
            console.log(
                `[grow] waiting ${opts.betweenSubjectSec}s before next list…`
            );
            await sleep(opts.betweenSubjectSec * 1000);
        }
    }

    saveState(state);
    console.log("[grow] stopped cleanly.");
    // Close shared pool if we opened db via countDbPages.
    try {
        const { pool } = require("../server/src/db");
        await pool.end();
    } catch (_) {
        /* ignore */
    }
}

main().catch((error) => {
    console.error("[grow] fatal:", error);
    process.exit(1);
});
