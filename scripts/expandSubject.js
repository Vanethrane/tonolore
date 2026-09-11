/**
 * Tandem subject expander: Wikipedia/Wikidata + Fandom.
 *
 * Default path for future seeds. Runs encyclopedia breadth first, then
 * franchise-wiki depth (characters, places, fair-use thumbs) into the same
 * expanded.json.
 *
 *   node scripts/expandSubject.js <subject-id>
 *   node scripts/expandSubject.js harry-potter --skip-images
 *   node scripts/expandSubject.js pokemon --skip-fandom
 *   node scripts/expandSubject.js star-wars --skip-wiki --limit=200
 *   node scripts/expandSubject.js one-piece --fandom-only
 */

const { spawnSync } = require("child_process");
const path = require("path");
const {
    getExpandConfig,
    listExpandableSubjects
} = require("./lib/subjectExpandConfigs");
const { expandFandomPass } = require("./lib/expandFandomPass");

function parseArgs(argv) {
    const subjectId = argv.find((arg) => !arg.startsWith("--"));
    return {
        subjectId,
        skipWiki:
            argv.includes("--skip-wiki") || argv.includes("--fandom-only"),
        skipFandom:
            argv.includes("--skip-fandom") || argv.includes("--wiki-only"),
        skipImages: argv.includes("--skip-images"),
        withWiki: argv.includes("--with-wiki"),
        // Rich multi-paragraph intros are the default for every expand.
        skipIntros: argv.includes("--skip-intros"),
        limit: (() => {
            const raw = argv.find((arg) => arg.startsWith("--limit="));
            return raw ? Number(raw.slice("--limit=".length)) || null : null;
        })()
    };
}

function runWikiPass(subjectId, opts) {
    const args = [
        path.join(__dirname, "expandSubjectDeep.js"),
        subjectId
    ];
    if (opts.skipImages) {
        args.push("--skip-images");
    }
    if (opts.withWiki) {
        args.push("--with-wiki");
    }

    console.log("\n=== Wikipedia / Wikidata pass ===\n");
    const result = spawnSync(process.execPath, args, {
        cwd: path.join(__dirname, ".."),
        stdio: "inherit",
        env: process.env
    });

    if (result.status !== 0) {
        throw new Error(
            `Wikipedia/Wikidata expand failed with code ${result.status}`
        );
    }
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));
    const { subjectId } = opts;

    if (!subjectId || !getExpandConfig(subjectId)) {
        console.error(
            "Usage: node scripts/expandSubject.js <subject-id> [--skip-wiki|--fandom-only] [--skip-fandom|--wiki-only] [--skip-images] [--with-wiki] [--skip-intros] [--limit=N]"
        );
        console.error("Subjects:", listExpandableSubjects().join(", "));
        process.exit(1);
    }

    const config = getExpandConfig(subjectId);
    console.log(`Tandem expand: ${subjectId}`);
    console.log(
        `  Wikipedia/Wikidata: ${opts.skipWiki ? "skip" : "yes"} | Fandom: ${
            opts.skipFandom || !config.fandom ? "skip" : config.fandom.host
        }`
    );

    if (!opts.skipWiki) {
        runWikiPass(subjectId, opts);
    }

    if (!opts.skipFandom && config.fandom) {
        console.log("\n=== Fandom pass ===\n");
        await expandFandomPass(subjectId, {
            limit: opts.limit,
            skipIntros: opts.skipIntros,
            delayMs: 110
        });
    } else if (!config.fandom) {
        console.log(
            "\nNo fandom block in subjectExpandConfigs.js — Wikipedia-only expand complete."
        );
    }

    console.log("\nTandem expand complete.");
    console.log(
        `Next: node scripts/seedSubject.js ${subjectId} && node scripts/generate/pages/generatePages.js ${subjectId}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
