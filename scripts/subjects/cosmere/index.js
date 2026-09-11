/**
 * Cosmere subject package — Brandon Sanderson's shared fantasy universe.
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
        id: "cosmere",
        name: "Cosmere",
        rootSlug: "cosmere",
        theme: "cosmere",
        copyright: {
            title: "The Cosmere is not owned by Ton-o-Lore.",
            body:
                "The Cosmere, Mistborn, The Stormlight Archive, Elantris, Warbreaker, and all related names, characters, and imagery are trademarks of Brandon Sanderson and/or Dragonsteel Entertainment. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by Brandon Sanderson, Dragonsteel, or their rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        cosmere: ["The Cosmere", "Cosmere universe"],
        "brandon-sanderson": ["Sanderson", "Brandon Sanderson"],
        hoid: ["Wit", "Hoid", "Cephandrius"],
        kaladin: ["Kaladin Stormblessed", "Kal"],
        "shallan-davar": ["Shallan", "Veil", "Radiant"],
        "dalinar-kholin": ["Dalinar", "Blackthorn"],
        "adolin-kholin": ["Adolin"],
        "jasnah-kholin": ["Jasnah"],
        "navani-kholin": ["Navani"],
        sylphrena: ["Syl", "Sylphrena"],
        pattern: ["Pattern"],
        szeth: ["Assassin in White", "Szeth-son-Neturo"],
        vin: ["Vin Venture", "Heir of the Survivor"],
        kelsier: ["Survivor", "Survivor of Hathsin"],
        sazed: ["Harmony", "Sazed"],
        harmony: ["Sazed"],
        "waxillium-ladrian": ["Wax", "Waxillium"],
        wayne: ["Wayne"],
        vasher: ["Zahel", "Warbreaker"],
        odium: ["Rayse", "Passion"],
        "the-stormlight-archive": ["Stormlight Archive", "Stormlight"],
        mistborn: ["Mistborn series"],
        scadrial: ["Scadrial"],
        roshar: ["Roshar"],
        shadesmar: ["Cognitive Realm"],
        "knights-radiant": ["Radiants", "Knights Radiant"],
        "bridge-four": ["Bridge Four"]
    },
    parents: {
        vin: "mistborn",
        kelsier: "mistborn",
        "elend-venture": "mistborn",
        sazed: "mistborn",
        "waxillium-ladrian": "mistborn",
        wayne: "mistborn",
        "lord-ruler": "final-empire",
        kaladin: "bridge-four",
        "shallan-davar": "the-stormlight-archive",
        "dalinar-kholin": "kholin-family",
        "adolin-kholin": "kholin-family",
        "jasnah-kholin": "kholin-family",
        "navani-kholin": "kholin-family",
        sylphrena: "spren",
        pattern: "spren",
        vasher: "warbreaker",
        vivenna: "warbreaker",
        lightsong: "warbreaker",
        raoden: "elantris",
        sarene: "elantris",
        hrathen: "elantris"
    }
});
