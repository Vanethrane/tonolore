/**
 * Re-seed + regenerate pages for subjects with format/medium hubs.
 *
 *   node scripts/maintenance/applyFormatHubsPipeline.js
 *   node scripts/maintenance/applyFormatHubsPipeline.js pokemon star-wars
 *   node scripts/maintenance/applyFormatHubsPipeline.js --skip-rich-intros
 */

require("../../server/src/config/env");
const path = require("path");
const { spawnSync } = require("child_process");
const { subjectsWithFormatHubs } = require("../subjects/formatHubs");
const { loadSubject } = require("../subjects/registry");
const { seedSubject } = require("../lib/seedRunner");
const { pool } = require("../../server/src/db");

const argv = process.argv.slice(2);
const skipRichIntros = argv.includes("--skip-rich-intros");
const requested = argv.filter((arg) => !arg.startsWith("--"));
const subjectIds = requested.length ? requested : subjectsWithFormatHubs();
const root = path.join(__dirname, "..", "..");

function runNode(scriptRel, args = []) {
    const result = spawnSync(
        process.execPath,
        [path.join(root, scriptRel), ...args],
        {
            cwd: root,
            stdio: "inherit",
            env: process.env
        }
    );
    if (result.status !== 0) {
        throw new Error(`${scriptRel} failed with code ${result.status}`);
    }
}

async function main() {
    console.log(`Format hubs pipeline: ${subjectIds.length} subjects`);

    for (const id of subjectIds) {
        const subject = loadSubject(id);
        console.log(`\n=== ${subject.name} (${id}) ===`);
        console.log(
            ` hubs: ${(subject.formatHubs || []).map((h) => h.slug).join(", ") || "(none)"}`
        );

        await seedSubject(subject, {
            skipRichIntros,
            richIntroLimit: skipRichIntros ? null : 25
        });

        runNode("scripts/generate/pages/generatePages.js", [id]);
    }
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
