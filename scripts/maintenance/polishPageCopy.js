/**
 * Continuous copy-polish worker.
 *
 * Rotates subjects, finds broken/thin entity blurbs, rewrites from Wikipedia +
 * Fandom into plain original prose, clears unverifiable junk, regenerates pages.
 *
 *   node scripts/maintenance/polishPageCopy.js
 *   node scripts/maintenance/polishPageCopy.js --batch=8 --between=3
 *   node scripts/maintenance/polishPageCopy.js --subjects=pokemon,one-piece
 *
 * State: scripts/.polish-copy-state.json
 */

require("../../server/src/config/env");

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const { query, pool } = require("../../server/src/db");
const { SUBJECT_IDS } = require("../subjects/registry");
const { polishEntityCopy, needsCopyPolish } = require("../lib/copyPolish");
const { sleep } = require("../lib/fandomClient");

const ROOT = path.join(__dirname, "..", "..");
const STATE_PATH = path.join(__dirname, "..", ".polish-copy-state.json");

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
        : SUBJECT_IDS.slice();

    return {
        batch: getNum("batch", 6),
        betweenSec: getNum("between", 4),
        pauseSec: getNum("pause", 20),
        delayMs: getNum("delay", 250),
        subjects
    };
}

function loadState() {
    if (!fs.existsSync(STATE_PATH)) {
        return { subjectIndex: 0, cycle: 0, polished: 0, cleared: 0 };
    }
    try {
        return JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
    } catch {
        return { subjectIndex: 0, cycle: 0, polished: 0, cleared: 0 };
    }
}

function saveState(state) {
    const tmp = `${STATE_PATH}.${process.pid}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(state, null, 2));
    fs.renameSync(tmp, STATE_PATH);
}

async function loadCandidates(universe, limit) {
    const result = await query(
        `
        SELECT *
        FROM entities
        WHERE metadata->>'universe' = $1
          AND (
            description IS NULL
            OR length(description) < 120
            OR description ILIKE '%is documented on%'
            OR description ILIKE '%as follows:%'
            OR description ILIKE '%may refer to%'
            OR description ILIKE '%most commonly refers to%'
            OR description ILIKE '%[[%'
            OR description ILIKE '%{{%'
            OR description ILIKE '%{|%'
            OR description ILIKE '%This Ton-o-Lore subject maps%'
            OR description ILIKE '%Wikipedia has an article on%'
            OR description ~ 'in[[:space:]]+\\.'
          )
        ORDER BY updated_at ASC NULLS FIRST, name ASC
        LIMIT $2
        `,
        [universe, limit * 3]
    );

    return result.rows
        .filter(
            (row) =>
                needsCopyPolish(row.description) ||
                needsCopyPolish(row.short_description)
        )
        .slice(0, limit);
}

async function applyPolish(entity, polish) {
    if (polish.clearBroken) {
        await query(
            `
            UPDATE entities
            SET description = $2,
                short_description = $3,
                updated_at = NOW()
            WHERE id = $1
            `,
            [
                entity.id,
                `${entity.name} appears in this subject graph; a full public encyclopedia lead was not available to rewrite cleanly yet.`,
                `${entity.name} in this subject graph.`
            ]
        );
        return "cleared";
    }

    await query(
        `
        UPDATE entities
        SET description = $2,
            short_description = $3,
            wikipedia_url = COALESCE($4, wikipedia_url),
            metadata = $5::jsonb,
            updated_at = NOW()
        WHERE id = $1
        `,
        [
            entity.id,
            polish.description,
            polish.short_description || entity.short_description,
            polish.wikipedia_url || null,
            JSON.stringify(polish.metadata || entity.metadata || {})
        ]
    );
    return "polished";
}

function regenerateSubject(subjectId) {
    const result = spawnSync(
        process.execPath,
        [
            path.join(ROOT, "scripts", "generate", "pages", "generatePages.js"),
            subjectId
        ],
        {
            cwd: ROOT,
            stdio: "inherit",
            env: {
                ...process.env,
                PAGE_GEN_CONCURRENCY: "2"
            }
        }
    );
    if (result.status !== 0) {
        throw new Error(`generatePages failed for ${subjectId}`);
    }
}

async function polishSubject(subjectId, opts, state) {
    const candidates = await loadCandidates(subjectId, opts.batch);
    console.log(
        `\n[polish] ${subjectId}: ${candidates.length} candidates (batch ${opts.batch})`
    );
    if (!candidates.length) {
        return { polished: 0, cleared: 0 };
    }

    let polished = 0;
    let cleared = 0;
    const touched = [];

    for (const entity of candidates) {
        try {
            const polish = await polishEntityCopy(entity);
            if (!polish) {
                continue;
            }
            const outcome = await applyPolish(entity, polish);
            touched.push(entity.id);
            if (outcome === "polished") {
                polished += 1;
                console.log(`  ✓ ${entity.slug}`);
            } else {
                cleared += 1;
                console.log(`  · cleared holes ${entity.slug}`);
            }
        } catch (error) {
            console.warn(`  ! ${entity.slug}: ${error.message}`);
            if (/429/.test(error.message)) {
                await sleep(90000);
            }
        }
        await sleep(opts.delayMs);
    }

    if (touched.length) {
        // Force regenerate by deleting those page rows, then only-missing.
        await query(`DELETE FROM pages WHERE entity_id = ANY($1::uuid[])`, [
            touched
        ]);
        const gen = spawnSync(
            process.execPath,
            [
                path.join(
                    ROOT,
                    "scripts",
                    "generate",
                    "pages",
                    "generatePages.js"
                ),
                subjectId,
                "--only-missing"
            ],
            {
                cwd: ROOT,
                stdio: "inherit",
                env: { ...process.env, PAGE_GEN_CONCURRENCY: "2" }
            }
        );
        if (gen.status !== 0) {
            console.warn(`[polish] generate failed for ${subjectId}; full regen`);
            regenerateSubject(subjectId);
        }
    }

    state.polished = Number(state.polished || 0) + polished;
    state.cleared = Number(state.cleared || 0) + cleared;
    return { polished, cleared };
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));
    const state = loadState();
    let stopping = false;
    const stop = (signal) => {
        if (stopping) return;
        stopping = true;
        console.log(`\n[polish] ${signal} — finishing current subject`);
    };
    process.on("SIGINT", () => stop("SIGINT"));
    process.on("SIGTERM", () => stop("SIGTERM"));

    console.log("[polish] Copy polish worker");
    console.log(
        `[polish] subjects=${opts.subjects.length} batch=${opts.batch} delay=${opts.delayMs}ms`
    );

    while (!stopping) {
        if (state.subjectIndex >= opts.subjects.length) {
            state.subjectIndex = 0;
            state.cycle = Number(state.cycle || 0) + 1;
            console.log(
                `\n[polish] cycle #${state.cycle} · polished ${state.polished} · cleared ${state.cleared}`
            );
            saveState(state);
            await sleep(opts.pauseSec * 1000);
            continue;
        }

        const subjectId = opts.subjects[state.subjectIndex];
        try {
            await polishSubject(subjectId, opts, state);
            saveState(state);
        } catch (error) {
            console.error(`[polish] ${subjectId} failed:`, error.message);
            saveState(state);
            await sleep(20000);
        }

        state.subjectIndex += 1;
        saveState(state);
        if (!stopping && state.subjectIndex < opts.subjects.length) {
            await sleep(opts.betweenSec * 1000);
        }
    }

    saveState(state);
    console.log("[polish] stopped");
    await pool.end();
}

main().catch(async (error) => {
    console.error("[polish] fatal:", error);
    try {
        await pool.end();
    } catch (_) {
        /* ignore */
    }
    process.exit(1);
});
