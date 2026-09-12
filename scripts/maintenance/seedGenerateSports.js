/**
 * Seed + generate all sports subjects, then export static pages + catalog.
 *
 *   node scripts/maintenance/seedGenerateSports.js
 *   node scripts/maintenance/seedGenerateSports.js --skip-rich-intros
 */

require("../../server/src/config/env");
const path = require("path");
const { spawnSync } = require("child_process");
const { sportsSubjectIds } = require("../subjects/sportsCatalog");
const { loadSubject } = require("../subjects/registry");
const { seedSubject } = require("../lib/seedRunner");
const { pool } = require("../../server/src/db");

const argv = process.argv.slice(2);
const skipRichIntros = argv.includes("--skip-rich-intros");
const root = path.join(__dirname, "..", "..");
const ids = sportsSubjectIds();

function runNode(scriptRel, args = []) {
    const result = spawnSync(
        process.execPath,
        [path.join(root, scriptRel), ...args],
        { cwd: root, stdio: "inherit", env: process.env }
    );
    if (result.status !== 0) {
        throw new Error(`${scriptRel} failed with code ${result.status}`);
    }
}

async function main() {
    console.log(`Sports pipeline: ${ids.length} subjects`);
    for (const id of ids) {
        const subject = loadSubject(id);
        console.log(`\n=== ${subject.name} (${id}) ===`);
        await seedSubject(subject, {
            skipRichIntros,
            richIntroLimit: skipRichIntros ? null : 20
        });
        runNode("scripts/generate/pages/generatePages.js", [id]);
    }

    runNode("scripts/maintenance/exportSubjectSlice.js", [ids.join(",")]);
    runNode("scripts/maintenance/refreshSubjectsCatalog.js");
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
