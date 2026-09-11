/**
 * Seed + generate pages for all expansion subjects.
 *   node scripts/maintenance/seedAndGenerateExpansion.js
 */

const { spawnSync } = require("child_process");
const path = require("path");
const { expansionSubjectIds } = require("../subjects/expansionCatalog");

const root = path.join(__dirname, "..", "..");
const ids = expansionSubjectIds();

function run(label, args) {
    console.log(`\n=== ${label} ===`);
    const result = spawnSync(process.execPath, args, {
        cwd: root,
        stdio: "inherit",
        env: process.env
    });
    if (result.status !== 0) {
        throw new Error(`${label} failed with status ${result.status}`);
    }
}

for (const id of ids) {
    run(`seed ${id}`, [
        path.join("scripts", "seedSubject.js"),
        id,
        "--skip-rich-intros"
    ]);
    run(`pages ${id}`, [
        path.join("scripts", "generate", "pages", "generatePages.js"),
        id
    ]);
}

console.log(`\nDone: ${ids.length} subjects seeded + pages generated.`);
