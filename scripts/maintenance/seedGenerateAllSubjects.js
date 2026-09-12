/**
 * Seed + generate pages for every registered subject.
 *
 *   node scripts/maintenance/seedGenerateAllSubjects.js
 *   node scripts/maintenance/seedGenerateAllSubjects.js --skip-rich-intros
 *   node scripts/maintenance/seedGenerateAllSubjects.js --from=pokemon
 *   node scripts/maintenance/seedGenerateAllSubjects.js --only=nba,nfl,ufc
 *
 * State: scripts/.seed-generate-all-state.json (resume-safe)
 */

require("../../server/src/config/env");

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const { SUBJECT_IDS, loadSubject } = require("../subjects/registry");
const { seedSubject } = require("../lib/seedRunner");
const { pool } = require("../../server/src/db");

const ROOT = path.join(__dirname, "..", "..");
const STATE_PATH = path.join(__dirname, "..", ".seed-generate-all-state.json");

function parseArgs(argv) {
    const fromRaw = argv.find((arg) => arg.startsWith("--from="));
    const onlyRaw = argv.find((arg) => arg.startsWith("--only="));
    const richRaw = argv.find((arg) => arg.startsWith("--rich-limit="));
    return {
        skipRichIntros: argv.includes("--skip-rich-intros"),
        richIntroLimit: richRaw
            ? Number(richRaw.slice("--rich-limit=".length)) || 25
            : 25,
        from: fromRaw ? fromRaw.slice("--from=".length).trim() : null,
        only: onlyRaw
            ? onlyRaw
                  .slice("--only=".length)
                  .split(",")
                  .map((part) => part.trim())
                  .filter(Boolean)
            : null
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

function generatePages(subjectId) {
    const result = spawnSync(
        process.execPath,
        [path.join(ROOT, "scripts", "generate", "pages", "generatePages.js"), subjectId],
        {
            cwd: ROOT,
            stdio: "inherit",
            env: process.env
        }
    );
    if (result.status !== 0) {
        throw new Error(`generatePages exited ${result.status}`);
    }
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));
    let ids = [...SUBJECT_IDS];

    if (opts.only?.length) {
        ids = ids.filter((id) => opts.only.includes(id));
    }
    if (opts.from) {
        const idx = ids.indexOf(opts.from);
        if (idx >= 0) {
            ids = ids.slice(idx);
        }
    }

    const state = loadState();
    state.startedAt = state.startedAt || new Date().toISOString();
    const done = new Set(state.completed || []);

    console.log(
        `[all] seed+generate ${ids.length} subjects` +
            (opts.skipRichIntros ? " (skip rich intros)" : ` (rich-limit=${opts.richIntroLimit})`)
    );
    console.log(`[all] already completed: ${done.size}`);

    for (let i = 0; i < ids.length; i += 1) {
        const id = ids[i];
        if (done.has(id)) {
            console.log(`\n[${i + 1}/${ids.length}] skip done ${id}`);
            continue;
        }

        console.log(`\n${"=".repeat(64)}`);
        console.log(`[${i + 1}/${ids.length}] ${id}`);
        console.log("=".repeat(64));

        try {
            const subject = loadSubject(id);
            await seedSubject(subject, {
                skipRichIntros: opts.skipRichIntros,
                richIntroLimit: opts.skipRichIntros ? null : opts.richIntroLimit
            });
            generatePages(id);
            state.completed = [...new Set([...(state.completed || []), id])];
            state.failed = (state.failed || []).filter((row) => row.id !== id);
            state.lastCompleted = id;
            state.lastAt = new Date().toISOString();
            saveState(state);
            console.log(`[all] ✓ ${id}`);
        } catch (error) {
            const detail =
                error?.message ||
                error?.code ||
                (Array.isArray(error?.errors)
                    ? error.errors.map((e) => e.message || e.code).join("; ")
                    : null) ||
                String(error);
            console.error(`[all] ✗ ${id}: ${detail}`);
            state.failed = [
                ...(state.failed || []).filter((row) => row.id !== id),
                {
                    id,
                    error: detail,
                    at: new Date().toISOString()
                }
            ];
            saveState(state);
        }
    }

    console.log(`\n[all] finished. completed=${(state.completed || []).length} failed=${(state.failed || []).length}`);
    if (state.failed?.length) {
        console.log(
            "[all] failed:",
            state.failed.map((row) => row.id).join(", ")
        );
    }
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
