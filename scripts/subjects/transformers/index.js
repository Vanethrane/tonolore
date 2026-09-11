/**
 * Transformers subject package — Hasbro / Takara Tomy franchise.
 */

const path = require("path");
const {
    entities: rawEntities,
    relationships: rawRelationships
} = require("./data");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");

module.exports = mergeSubjectPackage({
    subjectDir: path.join(__dirname),
    meta: {
        id: "transformers",
        name: "Transformers",
        rootSlug: "transformers",
        theme: "transformers",
        copyright: {
            title: "Transformers is not owned by Ton-o-Lore.",
            body:
                "Transformers and all related names, characters, artwork, logos, and intellectual property are the property of Hasbro, Takara Tomy, and/or their respective rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by Hasbro, Takara Tomy, or other Transformers rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        transformers: ["Transformers franchise", "Robots in Disguise"],
        hasbro: ["Hasbro, Inc."],
        "takara-tomy": ["Takara", "Tomy", "TakaraTomy"],
        "transformers-g1": ["G1", "Generation 1", "The Transformers"],
        "transformers-film": ["Transformers movies", "Bayverse", "Transformers live-action"],
        "transformers-prime": ["TFP", "Prime"],
        "transformers-war-for-cybertron": ["WFC", "War for Cybertron"],
        cybertron: ["Cybertronian homeworld"],
        earth: ["Planet Earth"],
        "autobot-city": ["Metroplex", "City of the Autobots"],
        autobots: ["Autobot"],
        decepticons: ["Decepticon"],
        allspark: ["Allspark", "All-Spark", "Cube"],
        "matrix-of-leadership": ["Autobot Matrix", "Creation Matrix", "Matrix"],
        energon: ["Energon cubes"],
        transformation: ["Convert", "Alt mode"],
        spark: ["Life spark"],
        "optimus-prime": ["Optimus", "Orion Pax", "Prime"],
        megatron: ["Megatronus"],
        bumblebee: ["Bee", "Bumble Bee"],
        starscream: ["Seeker leader"],
        jazz: ["Meister"],
        ironhide: ["Iron Hide"],
        ratchet: ["Autobot medic"],
        soundwave: ["Sound Wave"],
        shockwave: ["Shock Wave"],
        "optimus-primal": ["Primal"],
        unicron: ["Chaos Bringer", "Planet-Eater"],
        primus: ["Creator of Cybertron"],
        "elita-one": ["Elita One", "Elita", "Ariel"],
        ark: ["Autobot Ark"],
        nemesis: ["Decepticon Nemesis"]
    },
    parents: {
        "optimus-prime": "autobots",
        bumblebee: "autobots",
        jazz: "autobots",
        ironhide: "autobots",
        ratchet: "autobots",
        "elita-one": "autobots",
        megatron: "decepticons",
        starscream: "decepticons",
        soundwave: "decepticons",
        shockwave: "decepticons",
        "autobot-city": "earth",
        ark: "autobots",
        nemesis: "decepticons",
        "matrix-of-leadership": "autobots",
        allspark: "cybertron"
    }
});
