/**
 * Seed + generate the long-tail niche batch, then export static pages.
 *
 *   node scripts/maintenance/seedLongTailNiches.js
 */

require("../../server/src/config/env");

const { spawnSync } = require("child_process");
const path = require("path");
const { seedSubject } = require("../lib/seedRunner");
const { pool } = require("../../server/src/db");

const ROOT = path.join(__dirname, "..", "..");

const IDS = [
    "dinosaurs",
    "coffee",
    "native-american-history",
    "world-mythology",
    "folk-monsters",
    "medieval-monsters-bestiaries",
    "heraldry",
    "famous-bloodlines",
    "ancient-weaponry",
    "historical-clothing",
    "ancient-food",
    "spices-trade",
    "alcohol-history",
    "cars-automotive-history",
    "aviation-history",
    "railroad-history",
    "lighthouses",
    "ghost-ships",
    "famous-buildings",
    "abandoned-places",
    "motorcycle-history",
    "steamship-history",
    "skyscrapers",
    "bridges-engineering",
    "worlds-fairs"
];

function runNode(script, args) {
    const result = spawnSync(process.execPath, [script, ...args], {
        cwd: ROOT,
        stdio: "inherit",
        env: process.env
    });
    if (result.status !== 0) {
        throw new Error(`${path.basename(script)} failed (${result.status})`);
    }
}

async function main() {
    for (let i = 0; i < IDS.length; i += 1) {
        const id = IDS[i];
        console.log(`\n[${i + 1}/${IDS.length}] ${id}`);
        const subject = require(path.join(ROOT, "scripts", "subjects", id));
        await seedSubject(subject, { skipRichIntros: true });
        runNode(path.join(ROOT, "scripts", "generate", "pages", "generatePages.js"), [
            id,
            "--only-missing"
        ]);
    }

    runNode(path.join(__dirname, "exportSubjectSlice.js"), [IDS.join(",")]);
    runNode(path.join(__dirname, "refreshSubjectsCatalog.js"), []);
    console.log("[long-tail niches] done");
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
