/**
 * Seed + generate subjects that are still at hub-scale (≤40 entities in package),
 * then export those slices and refresh subjects.json.
 *
 *   node scripts/maintenance/seedPaddedSubjects.js
 */

require("../../server/src/config/env");

const { spawnSync } = require("child_process");
const path = require("path");
const { SUBJECT_IDS, loadSubject } = require("../subjects/registry");
const { seedSubject } = require("../lib/seedRunner");
const { pool } = require("../../server/src/db");

const ROOT = path.join(__dirname, "..", "..");
const MAX_PACKAGE_ENTITIES = 40;

function generatePages(subjectId) {
    const result = spawnSync(
        process.execPath,
        [
            path.join(ROOT, "scripts", "generate", "pages", "generatePages.js"),
            subjectId
        ],
        { cwd: ROOT, stdio: "inherit", env: process.env }
    );
    if (result.status !== 0) {
        throw new Error(`generatePages exited ${result.status}`);
    }
}

async function main() {
    const ids = SUBJECT_IDS.filter((id) => {
        const subject = loadSubject(id);
        return (subject.entities || []).length <= MAX_PACKAGE_ENTITIES;
    });

    console.log(`[pad-seed] ${ids.length} hub-scale subjects to seed+generate`);

    for (let i = 0; i < ids.length; i += 1) {
        const id = ids[i];
        console.log(`\n[${i + 1}/${ids.length}] ${id}`);
        const subject = loadSubject(id);
        await seedSubject(subject, { skipRichIntros: true });
        generatePages(id);
    }

    const slice = spawnSync(
        process.execPath,
        [path.join(__dirname, "exportSubjectSlice.js"), ids.join(",")],
        { cwd: ROOT, stdio: "inherit", env: process.env }
    );
    if (slice.status !== 0) {
        throw new Error("exportSubjectSlice failed");
    }

    const refresh = spawnSync(
        process.execPath,
        [path.join(__dirname, "refreshSubjectsCatalog.js")],
        { cwd: ROOT, stdio: "inherit", env: process.env }
    );
    if (refresh.status !== 0) {
        throw new Error("refreshSubjectsCatalog failed");
    }

    console.log("[pad-seed] done");
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
