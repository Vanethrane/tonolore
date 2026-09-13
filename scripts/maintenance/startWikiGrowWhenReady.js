/**
 * After depth-fill seed finishes, start Wikipedia grow for the 640 depth subjects
 * toward the 500k page target.
 *
 *   node scripts/maintenance/startWikiGrowWhenReady.js
 */

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const { depthFillSubjectIds } = require("../subjects/categoryDepthFillers");

const ROOT = path.join(__dirname, "..", "..");
const STATE_PATH = path.join(__dirname, "..", ".seed-depth-fill-state.json");
const IDS = depthFillSubjectIds();

function completedCount() {
    if (!fs.existsSync(STATE_PATH)) {
        return 0;
    }
    try {
        const state = JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
        return (state.completed || []).length;
    } catch {
        return 0;
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
    console.log(
        `[wiki-grow-wait] waiting for depth-fill seed (${IDS.length} subjects)…`
    );
    while (completedCount() < IDS.length) {
        const done = completedCount();
        console.log(`[wiki-grow-wait] ${done}/${IDS.length} seeded`);
        await sleep(60000);
    }

    console.log(
        "[wiki-grow-wait] depth-fill seed complete — starting Wikipedia grow → 500k"
    );
    const child = spawn(
        process.execPath,
        [
            path.join(ROOT, "scripts", "growSubjects.js"),
            "--batch=1",
            "--target-pages=500000",
            `--subjects=${IDS.join(",")}`
        ],
        {
            cwd: ROOT,
            stdio: "inherit",
            env: process.env,
            detached: false
        }
    );
    child.on("exit", (code) => {
        process.exit(code || 0);
    });
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
