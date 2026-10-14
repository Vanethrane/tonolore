/**
 * Seed every filled expansion subject plus Marvel.
 *   node scripts/maintenance/seedFilledSubjects.js
 */

const path = require("path");
const { expansionSubjectIds } = require("../subjects/expansionCatalog");
const { seedSubject } = require("../lib/seedRunner");

const ids = ["marvel", ...expansionSubjectIds()];

async function main() {
    let ok = 0;
    let failed = 0;

    for (const id of ids) {
        try {
            const subject = require(path.join(__dirname, "..", "subjects", id));
            await seedSubject(subject, {
                skipRichIntros: true,
                silent: true
            });
            ok += 1;
            console.log(`✓ seeded ${id} (${(subject.entities || []).length} entities)`);
        } catch (error) {
            failed += 1;
            console.error(`✗ ${id}: ${error.message}`);
        }
    }

    console.log(`\nSeed done. ${ok} ok, ${failed} failed.`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
