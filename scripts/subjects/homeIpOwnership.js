/**
 * Home-IP ownership: canonical creator franchise for shared character/org slugs.
 * Guest wikis (MK vs DC, Marvel vs Capcom, etc.) must not steal these paths.
 */

const path = require("path");
const fs = require("fs");

/** Explicit ownership + preferred URL parent (under home root). */
const OWNED = {
    // DC
    batman: { universe: "dc", parentSlug: "bat-family", type: "person" },
    "bruce-wayne": { universe: "dc", parentSlug: "wayne-enterprises", type: "person" },
    joker: { universe: "dc", parentSlug: "arkham-asylum", type: "person" },
    "harley-quinn": { universe: "dc", parentSlug: "arkham-asylum", type: "person" },
    catwoman: { universe: "dc", parentSlug: "bat-family", type: "person" },
    robin: { universe: "dc", parentSlug: "bat-family", type: "person" },
    nightwing: { universe: "dc", parentSlug: "bat-family", type: "person" },
    batgirl: { universe: "dc", parentSlug: "bat-family", type: "person" },
    "alfred-pennyworth": { universe: "dc", parentSlug: "bat-family", type: "person" },
    "jim-gordon": { universe: "dc", parentSlug: "gotham-city-police", type: "person" },
    penguin: { universe: "dc", parentSlug: "gotham", type: "person" },
    riddler: { universe: "dc", parentSlug: "arkham-asylum", type: "person" },
    "two-face": { universe: "dc", parentSlug: "arkham-asylum", type: "person" },
    "poison-ivy": { universe: "dc", parentSlug: "gotham", type: "person" },
    scarecrow: { universe: "dc", parentSlug: "arkham-asylum", type: "person" },
    bane: { universe: "dc", parentSlug: "gotham", type: "person" },
    "killer-croc": { universe: "dc", parentSlug: "gotham", type: "person" },
    "mr-freeze": { universe: "dc", parentSlug: "gotham", type: "person" },
    "ra-s-al-ghul": { universe: "dc", parentSlug: "gotham", type: "person" },
    deathstroke: { universe: "dc", parentSlug: "dc", type: "person" },
    gotham: { universe: "dc", parentSlug: "dc", type: "place" },
    "gotham-city": { universe: "dc", parentSlug: "dc", type: "place", canonicalSlug: "gotham" },
    "arkham-asylum": { universe: "dc", parentSlug: "gotham", type: "place" },
    batcave: { universe: "dc", parentSlug: "gotham", type: "place" },
    "bat-cave": { universe: "dc", parentSlug: "gotham", type: "place", canonicalSlug: "batcave" },
    "wayne-enterprises": { universe: "dc", parentSlug: "gotham", type: "organization" },
    "gotham-city-police": { universe: "dc", parentSlug: "gotham", type: "organization" },
    metropolis: { universe: "dc", parentSlug: "dc", type: "place" },
    "lex-luthor": { universe: "dc", parentSlug: "metropolis", type: "person" },
    "lex-corp": { universe: "dc", parentSlug: "metropolis", type: "organization" },
    lexcorp: { universe: "dc", parentSlug: "metropolis", type: "organization", canonicalSlug: "lex-corp" },
    "fortress-of-solitude": { universe: "dc", parentSlug: "metropolis", type: "place" },
    themyscira: { universe: "dc", parentSlug: "dc", type: "place" },
    "justice-league": { universe: "dc", parentSlug: "dc", type: "organization" },
    "bat-family": { universe: "dc", parentSlug: "dc", type: "organization" },
    "green-lantern-corps": { universe: "dc", parentSlug: "dc", type: "organization" },
    atlantis: { universe: "dc", parentSlug: "dc", type: "place" },
    "speed-force": { universe: "dc", parentSlug: "dc", type: "topic" },
    endless: { universe: "dc", parentSlug: "dc", type: "organization" },
    superman: { universe: "dc", parentSlug: "justice-league", type: "person" },
    "wonder-woman": { universe: "dc", parentSlug: "justice-league", type: "person" },
    aquaman: { universe: "dc", parentSlug: "justice-league", type: "person" },
    flash: { universe: "dc", parentSlug: "justice-league", type: "person" },
    "the-flash": { universe: "dc", parentSlug: "justice-league", type: "person", canonicalSlug: "flash" },
    "green-lantern": { universe: "dc", parentSlug: "justice-league", type: "person" },
    cyborg: { universe: "dc", parentSlug: "justice-league", type: "person" },
    darkseid: { universe: "dc", parentSlug: "dc", type: "person" },
    apokolips: { universe: "dc", parentSlug: "dc", type: "place" },
    brainiac: { universe: "dc", parentSlug: "metropolis", type: "person" },
    sinestro: { universe: "dc", parentSlug: "green-lantern-corps", type: "person" },
    "black-canary": { universe: "dc", parentSlug: "justice-league", type: "person" },
    "green-arrow": { universe: "dc", parentSlug: "dc", type: "person" },
    zatanna: { universe: "dc", parentSlug: "dc", type: "person" },
    constantine: { universe: "dc", parentSlug: "dc", type: "person" },
    "the-joker": { universe: "dc", parentSlug: "arkham-asylum", type: "person", canonicalSlug: "joker" },
    shazam: { universe: "dc", parentSlug: "dc", type: "person" },
    "captain-marvel": { universe: "dc", parentSlug: "dc", type: "person", canonicalSlug: "shazam" },
    peacemaker: { universe: "dc", parentSlug: "dc", type: "person" },
    "dc-universe": { universe: "dc", parentSlug: "dc", type: "topic", canonicalSlug: "dc" },

    // Marvel (core + common crossover guests) — do NOT claim Norse Asgard/Loki,
    // generic "shield"/"gem", or D&D "bane"; those have other home subjects.
    "spider-man": { universe: "marvel", parentSlug: "marvel", type: "person" },
    "peter-parker": { universe: "marvel", parentSlug: "spider-man", type: "person" },
    "iron-man": { universe: "marvel", parentSlug: "avengers", type: "person" },
    "tony-stark": { universe: "marvel", parentSlug: "stark-industries", type: "person" },
    "captain-america": { universe: "marvel", parentSlug: "avengers", type: "person" },
    thor: { universe: "marvel", parentSlug: "avengers", type: "person" },
    hulk: { universe: "marvel", parentSlug: "avengers", type: "person" },
    "black-widow": { universe: "marvel", parentSlug: "avengers", type: "person" },
    hawkeye: { universe: "marvel", parentSlug: "avengers", type: "person" },
    "doctor-strange": { universe: "marvel", parentSlug: "marvel", type: "person" },
    wolverine: { universe: "marvel", parentSlug: "x-men", type: "person" },
    deadpool: { universe: "marvel", parentSlug: "marvel", type: "person" },
    venom: { universe: "marvel", parentSlug: "spider-man", type: "person" },
    "black-panther": { universe: "marvel", parentSlug: "marvel", type: "person" },
    "scarlet-witch": { universe: "marvel", parentSlug: "avengers", type: "person" },
    vision: { universe: "marvel", parentSlug: "avengers", type: "person" },
    thanos: { universe: "marvel", parentSlug: "marvel", type: "person" },
    avengers: { universe: "marvel", parentSlug: "marvel", type: "organization" },
    "x-men": { universe: "marvel", parentSlug: "marvel", type: "organization" },
    "stark-industries": { universe: "marvel", parentSlug: "marvel", type: "organization" },
    wakanda: { universe: "marvel", parentSlug: "marvel", type: "place" }
};

/** Subjects that scrape guest characters from other IPs (safe to rehome FROM). */
const CROSSOVER_GUEST_SUBJECTS = new Set([
    "mortal-kombat",
    "marvel-vs-capcom",
    "injustice",
    "kingdom-hearts",
    "super-smash-bros",
    "jump-force",
    "fortnite"
]);

/** Guest subject → crossover work slug used as appearance parent when present. */
const CROSSOVER_WORK_BY_GUEST = {
    "mortal-kombat": "mortal-kombat-vs-dc-universe",
    "marvel-vs-capcom": "marvel-vs-capcom",
    injustice: "injustice-gods-among-us",
    "kingdom-hearts": "kingdom-hearts"
};

function ownershipForSlug(slug) {
    const key = String(slug || "").toLowerCase().trim();
    return OWNED[key] || null;
}

function canonicalSlugFor(slug) {
    const own = ownershipForSlug(slug);
    if (!own) {
        return String(slug || "").toLowerCase().trim();
    }
    return own.canonicalSlug || String(slug || "").toLowerCase().trim();
}

function homeUniverseForSlug(slug) {
    return ownershipForSlug(slug)?.universe || null;
}

function appearanceSlug(baseSlug, guestUniverse) {
    const canon = canonicalSlugFor(baseSlug);
    const guest = String(guestUniverse || "guest")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    return `${canon}-in-${guest}`;
}

/**
 * Load core slugs from every subject package data.js (hand-authored = home).
 * Merged on top of OWNED; package id wins as universe.
 */
function loadCoreOwnershipFromDisk(rootDir) {
    const subjectsDir = path.join(rootDir, "scripts", "subjects");
    const map = { ...OWNED };
    if (!fs.existsSync(subjectsDir)) {
        return map;
    }
    for (const entry of fs.readdirSync(subjectsDir, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            continue;
        }
        const dataPath = path.join(subjectsDir, entry.name, "data.js");
        if (!fs.existsSync(dataPath)) {
            continue;
        }
        try {
            // eslint-disable-next-line import/no-dynamic-require, global-require
            const mod = require(dataPath);
            const entities = mod.entities || [];
            for (const entity of entities) {
                const slug = String(entity.slug || "").toLowerCase();
                if (!slug || slug === entry.name) {
                    continue;
                }
                if (map[slug] && map[slug].universe !== entry.name) {
                    // Explicit OWNED / earlier package wins; skip overwrite.
                    continue;
                }
                if (!map[slug]) {
                    map[slug] = {
                        universe: entry.name,
                        parentSlug: entity.parentSlug || entry.name,
                        type: entity.type || "topic"
                    };
                }
            }
        } catch {
            /* ignore bad packages */
        }
    }
    return map;
}

module.exports = {
    OWNED,
    CROSSOVER_GUEST_SUBJECTS,
    CROSSOVER_WORK_BY_GUEST,
    ownershipForSlug,
    canonicalSlugFor,
    homeUniverseForSlug,
    appearanceSlug,
    loadCoreOwnershipFromDisk
};
