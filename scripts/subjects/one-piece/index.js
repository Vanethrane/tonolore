/**
 * One Piece subject package.
 *
 * Merges hand-authored core data with optional expanded.json
 * produced by expandDeep.js / expandFromFandom.js (Wikidata, Wikipedia, One Piece Fandom).
 */

const fs = require("fs");
const path = require("path");
const { entities: rawEntities, relationships: rawRelationships } = require("./data");

const ALIASES = {
    "monkey-d-luffy": ["Luffy", "Monkey D. Luffy", "Straw Hat Luffy"],
    "roronoa-zoro": ["Zoro", "Roronoa Zoro"],
    "tony-tony-chopper": ["Chopper", "Tony Tony Chopper"],
    "nico-robin": ["Robin", "Nico Robin"],
    "gol-d-roger": ["Roger", "Gol D. Roger", "Pirate King Roger"],
    "silvers-rayleigh": ["Rayleigh", "Silvers Rayleigh"],
    "whitebeard": ["Whitebeard", "Edward Newgate"],
    "portgas-d-ace": ["Ace", "Portgas D. Ace"],
    "monkey-d-dragon": ["Dragon", "Monkey D. Dragon"],
    "monkey-d-garp": ["Garp", "Monkey D. Garp"],
    "marshall-d-teach": ["Blackbeard", "Marshall D. Teach", "Teach"],
    "donquixote-doflamingo": ["Doflamingo", "Donquixote Doflamingo"],
    "dr-vegapunk": ["Vegapunk", "Dr. Vegapunk"],
    "kozuki-oden": ["Oden", "Kozuki Oden"],
    "nefertari-d-lili": ["Nefertari D. Lily", "Queen Lili", "Lili"],
    "nefertari-vivi": ["Vivi", "Nefertari Vivi"],
    "bartholomew-kuma": ["Kuma", "Bartholomew Kuma"],
    bonney: ["Jewelry Bonney", "Bonney"],
    "kozuki-momonosuke": ["Momonosuke", "Kozuki Momonosuke"],
    "laugh-tale": ["Laugh Tale", "Raftel"],
    "straw-hat-pirates": ["Straw Hats", "Straw Hat Pirates"],
    "world-government": ["World Government"],
    "void-century": ["Void Century"],
    "one-piece": ["One Piece"],
    "big-mom": ["Big Mom", "Charlotte Linlin"],
    kaido: ["Kaido"],
    "trafalgar-law": ["Law", "Trafalgar Law"],
    "eustass-kid": ["Kid", "Eustass Kid"],
    "boa-hancock": ["Hancock", "Boa Hancock"]
};

const CREW_PARENTS = {
    "monkey-d-luffy": "straw-hat-pirates",
    "roronoa-zoro": "straw-hat-pirates",
    nami: "straw-hat-pirates",
    usopp: "straw-hat-pirates",
    sanji: "straw-hat-pirates",
    "tony-tony-chopper": "straw-hat-pirates",
    "nico-robin": "straw-hat-pirates",
    franky: "straw-hat-pirates",
    brook: "straw-hat-pirates",
    jinbe: "straw-hat-pirates",
    "thousand-sunny": "straw-hat-pirates",
    "going-merry": "straw-hat-pirates"
};

function loadExpanded() {
    const file = path.join(__dirname, "expanded.json");

    if (!fs.existsSync(file)) {
        return {
            enrichments: [],
            entities: [],
            relationships: [],
            fair_use_policy: null
        };
    }

    return JSON.parse(fs.readFileSync(file, "utf8"));
}

const expanded = loadExpanded();
const enrichmentBySlug = new Map(
    (expanded.enrichments || []).map((row) => [row.slug, row])
);

const coreEntities = rawEntities.map((entity) => {
    const enrichment = enrichmentBySlug.get(entity.slug) || {};

    return {
        ...entity,
        ...enrichment,
        slug: entity.slug,
        name: entity.name,
        type: entity.type,
        aliases: [
            ...(entity.aliases || []),
            ...(ALIASES[entity.slug] || [])
        ],
        parentSlug:
            entity.parentSlug ||
            CREW_PARENTS[entity.slug] ||
            undefined,
        metadata: {
            ...(entity.metadata || {}),
            ...(enrichment.metadata || {}),
            fair_use:
                enrichment.image_usage === "fair_use_identification"
                    ? expanded.fair_use_policy || true
                    : undefined
        }
    };
});

const known = new Set(coreEntities.map((entity) => entity.slug));
const discoveredEntities = [];

const NOISY_NAME =
    /^(ho|shine|lily|rock|stronger|killer|baby|mom|dad|king|queen|prince|princess|doctor|captain|admiral|god|devil|sun|moon|sea|fire|ice|wind|rain|sky|earth|gold|silver|iron|steel|ruby|pearl|diamond)$/i;

for (const entity of expanded.entities || []) {
    if (known.has(entity.slug)) {
        continue;
    }

    const name = String(entity.name || "").trim();

    if (name.length < 3) {
        continue;
    }

    if (NOISY_NAME.test(name) && !(entity.description || "").toLowerCase().includes("one piece") && !(entity.description || "").toLowerCase().includes("pirate")) {
        continue;
    }

    // Prefer items with a real description, wiki page, or Fandom source.
    if (
        !entity.wikipedia_url &&
        !entity.wikidata_id &&
        !(entity.metadata && entity.metadata.fandom_url) &&
        (!entity.description || entity.description.length < 40)
    ) {
        continue;
    }

    known.add(entity.slug);
    discoveredEntities.push({
        ...entity,
        parentSlug: entity.parentSlug || "one-piece",
        evidence: entity.evidence || "fiction",
        metadata: {
            canon: false,
            discovered: true,
            source: entity.metadata?.source || "wikidata+wikipedia",
            ...(entity.metadata || {}),
            fair_use:
                entity.image_usage === "fair_use_identification"
                    ? expanded.fair_use_policy || true
                    : undefined
        }
    });
}

const entities = [...coreEntities, ...discoveredEntities];
const entitySlugs = new Set(entities.map((entity) => entity.slug));

const relationships = [
    ...rawRelationships,
    ...(expanded.relationships || [])
].filter(([from, to]) => entitySlugs.has(from) && entitySlugs.has(to));

module.exports = {
    id: "one-piece",
    name: "One Piece",
    rootSlug: "one-piece",
    theme: "one-piece",
    copyright: {
        title: "ONE PIECE is not owned by Ton-o-Lore.",
        body:
            "ONE PIECE, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Eiichiro Oda, Shueisha, Toei Animation, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by the ONE PIECE rights holders. Identification thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
    },
    entities,
    relationships
};
