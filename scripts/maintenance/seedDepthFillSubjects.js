/**
 * Seed + generate every depth-fill subject (after scaffold + pad).
 * Resume-safe via scripts/.seed-depth-fill-state.json
 *
 *   node scripts/maintenance/seedDepthFillSubjects.js
 *   node scripts/maintenance/seedDepthFillSubjects.js --expand-limit=80
 *   node scripts/maintenance/seedDepthFillSubjects.js --skip-expand
 */

require("../../server/src/config/env");

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const { depthFillSubjectIds } = require("../subjects/categoryDepthFillers");
const { seedSubject } = require("../lib/seedRunner");
const { expandFandomPass } = require("../lib/expandFandomPass");
const { pool } = require("../../server/src/db");

const ROOT = path.join(__dirname, "..", "..");
const STATE_PATH = path.join(__dirname, "..", ".seed-depth-fill-state.json");

function parseArgs(argv) {
    const expandRaw = argv.find((arg) => arg.startsWith("--expand-limit="));
    return {
        skipExpand: argv.includes("--skip-expand"),
        expandLimit: expandRaw
            ? Number(expandRaw.slice("--expand-limit=".length)) || 80
            : 120
    };
}

function loadState() {
    if (!fs.existsSync(STATE_PATH)) {
        return { completed: [], failed: [], startedAt: null };
    }
    try {
        return JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
    } catch {
        return { completed: [], failed: [], startedAt: null };
    }
}

function saveState(state) {
    const tmp = `${STATE_PATH}.${process.pid}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(state, null, 2));
    fs.renameSync(tmp, STATE_PATH);
}

function bustCache(subjectId) {
    const needle = `${path.sep}subjects${path.sep}${subjectId}${path.sep}`;
    const needleAlt = `/subjects/${subjectId}/`;
    for (const key of Object.keys(require.cache)) {
        if (key.includes(needle) || key.includes(needleAlt)) {
            delete require.cache[key];
        }
    }
}

function generatePages(subjectId) {
    const result = spawnSync(
        process.execPath,
        [
            path.join(ROOT, "scripts", "generate", "pages", "generatePages.js"),
            subjectId,
            "--only-missing"
        ],
        { cwd: ROOT, stdio: "inherit", env: process.env }
    );
    if (result.status !== 0) {
        throw new Error(`generatePages exited ${result.status}`);
    }
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));
    const ids = depthFillSubjectIds();
    const state = loadState();
    state.startedAt = state.startedAt || new Date().toISOString();
    const done = new Set(state.completed || []);

    console.log(
        `[depth-fill] ${ids.length} subjects · expandLimit=${opts.expandLimit}` +
            (opts.skipExpand ? " · skip-expand" : "")
    );
    console.log(`[depth-fill] already completed: ${done.size}`);

    for (let i = 0; i < ids.length; i += 1) {
        const id = ids[i];
        if (done.has(id)) {
            continue;
        }
        console.log(`\n[${i + 1}/${ids.length}] ${id}`);
        try {
            if (!opts.skipExpand) {
                await expandFandomPass(id, {
                    limit: opts.expandLimit,
                    skipIntros: true,
                    delayMs: 140
                });
            }
            bustCache(id);
            const subject = require(path.join(ROOT, "scripts", "subjects", id));
            await seedSubject(subject, { skipRichIntros: true });
            generatePages(id);
            state.completed.push(id);
            saveState(state);
        } catch (error) {
            console.error(`[depth-fill] failed ${id}:`, error.message);
            state.failed = state.failed || [];
            state.failed.push({ id, error: error.message });
            saveState(state);
        }
    }

    const completed = state.completed || [];
    if (completed.length) {
        const slice = spawnSync(
            process.execPath,
            [path.join(__dirname, "exportSubjectSlice.js"), completed.join(",")],
            { cwd: ROOT, stdio: "inherit", env: process.env }
        );
        if (slice.status !== 0) {
            throw new Error("exportSubjectSlice failed");
        }
    }

    const refresh = spawnSync(
        process.execPath,
        [path.join(__dirname, "refreshSubjectsCatalog.js")],
        { cwd: ROOT, stdio: "inherit", env: process.env }
    );
    if (refresh.status !== 0) {
        throw new Error("refreshSubjectsCatalog failed");
    }

    console.log(
        `[depth-fill] done · completed=${completed.length} failed=${(state.failed || []).length}`
    );
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
