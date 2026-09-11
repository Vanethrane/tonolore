/**
 * Destiny subject package — Bungie's shared-world sci-fi shooter universe.
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
        id: "destiny",
        name: "Destiny",
        rootSlug: "destiny",
        theme: "destiny",
        copyright: {
            title: "Destiny is not owned by Ton-o-Lore.",
            body:
                "Destiny, Destiny 2, and related names, characters, logos, and intellectual property are the property of their respective rights holders, including Bungie, Inc. and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        destiny: ["Destiny franchise", "Destiny universe"],
        bungie: ["Bungie, Inc.", "Bungie Studios"],
        "destiny-1": ["Destiny 1", "Destiny 2014", "D1"],
        "destiny-2": ["D2"],
        traveler: ["The Traveler", "Great Machine"],
        darkness: ["The Darkness", "The Deep", "Witness"],
        light: ["The Light"],
        ghosts: ["Ghost", "Little Light"],
        guardians: ["Guardian", "Lightbearers", "Risen"],
        vanguard: ["Vanguard", "City Vanguard"],
        cabal: ["The Cabal"],
        vex: ["The Vex"],
        hive: ["The Hive"],
        fallen: ["Eliksni", "The Fallen"],
        taken: ["The Taken"],
        awoken: ["The Awoken"],
        exo: ["Exos"],
        savathun: ["Savathun", "Witch Queen", "Savathûn the Witch Queen"],
        oryx: ["Taken King", "Oryx the Taken King", "Auryx"],
        crota: ["Crota Son of Oryx"],
        "xivu-arath": ["Xivu", "God of War"],
        rasputin: ["Warmind", "The Warmind"],
        zavala: ["Commander Zavala", "Zavala"],
        "ikora-rey": ["Ikora"],
        "cayde-6": ["Cayde", "Cayde6"],
        "eris-morn": ["Eris"],
        osiris: ["The Exile"],
        "the-city": ["Last City", "The City", "Last Safe City"],
        tower: ["The Tower"],
        reef: ["The Reef", "Awoken Reef"],
        "dreaming-city": ["Dreaming City"],
        dreadnaught: ["Dreadnaught", "Oryx's Dreadnaught"],
        "pyramid-ships": ["Pyramids", "Black Fleet", "Pyramid"]
    },
    parents: {
        zavala: "vanguard",
        "ikora-rey": "vanguard",
        "cayde-6": "vanguard",
        crota: "hive",
        savathun: "hive",
        oryx: "hive",
        "xivu-arath": "hive",
        taken: "oryx",
        tower: "the-city",
        "the-city": "traveler",
        "dreaming-city": "reef",
        dreadnaught: "oryx",
        ghosts: "traveler",
        guardians: "light",
        "destiny-1": "destiny",
        "destiny-2": "destiny"
    }
});
