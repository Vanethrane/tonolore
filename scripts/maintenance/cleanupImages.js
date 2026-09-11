/**
 * Clean broken / placeholder entity images and repair subject logo URLs.
 *
 *   node scripts/maintenance/cleanupImages.js --dry-run
 *   node scripts/maintenance/cleanupImages.js
 *   node scripts/maintenance/cleanupImages.js --repair-logos
 */

const fs = require("fs");
const path = require("path");

require("../../server/node_modules/dotenv").config({
    path: path.join(__dirname, "..", "..", ".env")
});
const { Client } = require("../../server/node_modules/pg");
const SUBJECT_LOGOS = require("../subjects/logos");
const { SUBJECT_IDS } = require("../subjects/registry");

const UA =
    "Ton-o-LoreImageCleanup/1.0 (https://github.com/Vanethrane/tonolore; lore@local)";

const PLACEHOLDER_PATTERNS = [
    /nopicaailable/i,
    /nopicavailable/i,
    /no[_-]?image/i,
    /image[_-]?unavailable/i,
    /placeholder/i,
    /default[_-]?avatar/i,
    /site[_-]?logo/i,
    /wiki[_-]?png/i,
    /file[_-]?missing/i,
    /missing[_-]?image/i,
    /replace[_-]?this[_-]?image/i
];

function parseArgs(argv) {
    return {
        dryRun: argv.includes("--dry-run"),
        repairLogos: argv.includes("--repair-logos") || argv.includes("--all"),
        cleanEntities:
            argv.includes("--clean-entities") ||
            argv.includes("--all") ||
            (!argv.includes("--repair-logos") &&
                !argv.includes("--clean-entities"))
    };
}

function isPlaceholderUrl(url) {
    return PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(String(url || "")));
}

function stripTracking(url) {
    try {
        const parsed = new URL(url);
        ["utm_source", "utm_campaign", "utm_content", "utm_medium", "utm_term"].forEach(
            (key) => parsed.searchParams.delete(key)
        );
        const cleaned = parsed.toString();
        return cleaned.endsWith("?") ? cleaned.slice(0, -1) : cleaned;
    } catch {
        return url;
    }
}

async function commonsThumb(fileTitle) {
    const title = fileTitle.startsWith("File:")
        ? fileTitle
        : `File:${fileTitle}`;
    const api = new URL("https://commons.wikimedia.org/w/api.php");
    api.searchParams.set("action", "query");
    api.searchParams.set("format", "json");
    api.searchParams.set("prop", "imageinfo");
    api.searchParams.set("iiprop", "url");
    api.searchParams.set("iiurlwidth", "360");
    api.searchParams.set("titles", title);
    api.searchParams.set("origin", "*");

    const response = await fetch(api, {
        headers: { "User-Agent": UA, Accept: "application/json" }
    });
    if (!response.ok) {
        return null;
    }
    const data = await response.json();
    const page = Object.values(data?.query?.pages || {})[0];
    const info = page?.imageinfo?.[0];
    return info?.thumburl || info?.url || null;
}

async function probeOk(url) {
    try {
        const response = await fetch(url, {
            headers: { "User-Agent": UA, Accept: "image/*,*/*;q=0.8" },
            redirect: "follow"
        });
        try {
            await response.body?.cancel?.();
        } catch {
            /* ignore */
        }
        const type = String(response.headers.get("content-type") || "");
        return (
            response.ok &&
            (!type ||
                type.startsWith("image/") ||
                type.includes("octet-stream") ||
                type.includes("svg"))
        );
    } catch {
        return false;
    }
}

const LOGO_CANDIDATES = {
    "one-piece": ["One piece logo.svg", "ONE PIECE logo.png"],
    cosmere: ["The Alloy of Law cover art.jpg", "Mistborn- The Final Empire cover.jpg"],
    "dragon-ball": ["Dragon Ball anime logo.png", "Dragon Ball logo.svg"],
    "wheel-of-time": ["Banner of Light.svg", "Wheel of Time logo.png"],
    transformers: ["Transformers logo.svg", "The Transformers (logo).svg"],
    naruto: ["Naruto logo.svg", "Naruto Shippuden logo.svg"],
    "demon-slayer": [
        "Demon_Slayer_Kimetsu_no_Yaiba_logo.png",
        "Kimetsu no Yaiba logo.png"
    ],
    "attack-on-titan": [
        "Attack on Titan logo.png",
        "Shingeki no Kyojin logo.png"
    ],
    minecraft: ["Minecraft logo.svg", "Minecraft cover.png"],
    "jurassic-park": ["Jurassic Park logo.svg", "JurassicParkLogo.png"],
    "james-bond": ["007 logo.svg", "James Bond gun logo.svg"],
    "warhammer-40k": ["Warhammer 40,000 logo.svg", "Aquila (Warhammer).svg"],
    "elder-scrolls": ["The Elder Scrolls logo.svg", "Elder Scrolls Online logo.svg"],
    "world-of-warcraft": [
        "World of Warcraft classic logo.svg",
        "World of Warcraft logo.svg"
    ],
    "final-fantasy": ["Final Fantasy series logo.svg", "Final Fantasy logo.svg"],
    fallout: ["Fallout logo.svg", "Fallout (franchise) logo.svg"],
    destiny: ["Destiny 2 logo.svg", "Destiny (video game) logo.png"],
    "doctor-who": ["Doctor Who Logo 2018.svg", "Doctor Who logo.svg"],
    dune: ["Dune 2021 logo.svg", "Dune (2021 film) logo.png"],
    "the-witcher": ["The Witcher logo.svg", "Witcher logo.svg"],
    "mass-effect": ["Logo Mass Effect.svg", "Mass Effect logo.svg"],
    "chainsaw-man": [
        "Chainsaw Man English anime logo.svg",
        "Chainsaw Man logo.png"
    ],
    "jojos-bizarre-adventure": [
        "Jojo's Bizarre Adventure (English logo).png",
        "JoJo's Bizarre Adventure logo.png"
    ],
    invincible: ["Invincible (comics) logo.png"],
    "teenage-mutant-ninja-turtles": [
        "Teenage Mutant Ninja Turtles logo.svg",
        "TMNT logo.svg"
    ],
    "dungeons-and-dragons": [
        "Dungeons & Dragons 5th Edition logo.svg",
        "Dungeons and Dragons wordmark.svg"
    ],
    "magic-the-gathering": [
        "Magic the gathering-logo.svg",
        "Magic_the_gathering-logo.svg"
    ],
    pathfinder: ["Pathfinder RPG logo.png"],
    "warhammer-fantasy": ["Warhammer Fantasy Battle logo.svg"],
    "vampire-the-masquerade": ["Vampire The Masquerade logo.svg"],
    battletech: ["BattleTech logo.svg"],
    "call-of-cthulhu": ["Cthulhu sketch by Lovecraft.jpg"]
};

async function repairLogos(dryRun) {
    console.log("\n=== Repair subject logos ===\n");
    const logosPath = path.join(__dirname, "..", "subjects", "logos.js");
    let source = fs.readFileSync(logosPath, "utf8");
    let changed = 0;

    for (const id of SUBJECT_IDS) {
        const current = SUBJECT_LOGOS[id];
        if (!current?.url) {
            console.log(`SKIP ${id} (no logo entry)`);
            continue;
        }

        const currentOk = await probeOk(current.url);
        if (currentOk && !isPlaceholderUrl(current.url)) {
            continue;
        }

        const candidates = LOGO_CANDIDATES[id] || [];
        let replacement = null;
        for (const file of candidates) {
            const thumb = await commonsThumb(file);
            if (thumb && (await probeOk(thumb))) {
                replacement = thumb;
                break;
            }
        }

        if (!replacement) {
            console.log(`STILL BROKEN ${id}`);
            continue;
        }

        console.log(`FIX ${id}`);
        console.log(`  old ${current.url}`);
        console.log(`  new ${replacement}`);
        const escapedOld = current.url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        source = source.replace(new RegExp(escapedOld, "g"), replacement);
        changed += 1;
    }

    if (changed && !dryRun) {
        fs.writeFileSync(logosPath, source);
        console.log(`\nWrote ${changed} logo URL fix(es) to logos.js`);
    } else if (changed) {
        console.log(`\nDry-run: would write ${changed} logo URL fix(es)`);
    } else {
        console.log("\nNo logo URL changes needed (or none resolvable).");
    }

    return changed;
}

async function cleanEntities(client, dryRun) {
    console.log("\n=== Clean entity images ===\n");

    const logoUrls = SUBJECT_IDS.map((id) => SUBJECT_LOGOS[id]?.url).filter(
        Boolean
    );

    const all = await client.query(`
        SELECT id, image_url
        FROM entities
        WHERE image_url IS NOT NULL AND BTRIM(image_url) <> ''
    `);

    const clearIds = [];
    const rewrite = [];

    for (const row of all.rows) {
        const url = row.image_url;
        if (isPlaceholderUrl(url) || logoUrls.includes(url)) {
            clearIds.push(row.id);
            continue;
        }

        const cleaned = stripTracking(url);
        if (cleaned !== url) {
            rewrite.push({ id: row.id, url: cleaned });
        }
    }

    console.log(`Placeholder / logo-fallback rows: ${clearIds.length}`);
    console.log(`Tracking-param rewrites: ${rewrite.length}`);

    if (dryRun) {
        return { cleared: 0, rewritten: 0 };
    }

    let cleared = 0;
    if (clearIds.length) {
        const result = await client.query(
            `
            UPDATE entities
            SET
                image_url = NULL,
                image_source = NULL,
                image_credit = NULL,
                image_license = NULL,
                image_usage = NULL,
                image_alt = NULL
            WHERE id = ANY($1::uuid[])
            `,
            [clearIds]
        );
        cleared = result.rowCount;
    }

    let rewritten = 0;
    for (const row of rewrite) {
        const result = await client.query(
            `UPDATE entities SET image_url = $2 WHERE id = $1 AND image_url IS NOT NULL`,
            [row.id, row.url]
        );
        rewritten += result.rowCount;
    }

    console.log(`Cleared ${cleared}; rewritten ${rewritten}`);
    return { cleared, rewritten };
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));
    console.log(
        `cleanupImages dryRun=${opts.dryRun} repairLogos=${opts.repairLogos} cleanEntities=${opts.cleanEntities}`
    );

    if (opts.repairLogos) {
        await repairLogos(opts.dryRun);
    }

    if (opts.cleanEntities) {
        const client = new Client({
            connectionString: process.env.DATABASE_URL
        });
        await client.connect();
        try {
            await cleanEntities(client, opts.dryRun);
        } finally {
            await client.end();
        }
    }

    console.log("\nCLEANUP_DONE");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
