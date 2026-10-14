/**
 * NASA — Science & nature subject package.
 */

const path = require("path");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");
const {
    entities: rawEntities,
    relationships: rawRelationships
} = require("./data");

module.exports = mergeSubjectPackage({
    subjectDir: path.join(__dirname),
    meta: {
        id: "nasa",
        name: "NASA",
        rootSlug: "nasa",
        theme: "nasa",
        categories: ["science-nature"],
        copyright: {
            title: "NASA is not owned by Ton-o-Lore.",
            body:
                "NASA, related names, marks, and materials are the property of NASA / U.S. government works / respective partners. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        nasa: ["NASA", "National Aeronautics and Space Administration"],
        "werner-von-braun": ["von Braun", "Wernher von Braun"],
        "neil-armstrong": ["Armstrong"],
        "buzz-aldrin": ["Aldrin", "Edwin Aldrin"],
        "michael-collins": ["Collins"],
        "sally-ride": ["Ride"],
        "katherine-johnson": ["Katherine Goble Johnson"],
        "gene-kranz": ["Kranz", "White Team"],
        "christopher-kraft": ["Chris Kraft", "Christopher Kraft"],
        "mercury-program": ["Project Mercury", "Mercury"],
        "gemini-program": ["Project Gemini", "Gemini"],
        "apollo-program": ["Apollo", "Project Apollo"],
        "apollo-11": ["Apollo XI", "first Moon landing"],
        "saturn-v": ["Saturn 5", "Moon rocket"],
        "space-shuttle-program": ["Space Shuttle", "STS"],
        "artemis-program": ["Artemis"],
        "orion-spacecraft": ["Orion", "Orion MPCV"],
        "voyager-program": ["Voyager"],
        "voyager-1": ["Voyager I"],
        "mars-exploration-program": ["MEP", "NASA Mars program"],
        "curiosity-rover": ["Curiosity", "Mars Science Laboratory", "MSL"],
        "perseverance-rover": ["Perseverance", "Mars 2020"],
        "hubble-space-telescope": ["Hubble", "HST"],
        "james-webb-space-telescope": ["JWST", "Webb", "James Webb"],
        "international-space-station": ["ISS"],
        "kennedy-space-center": ["KSC", "Kennedy"],
        "cape-canaveral": ["Cape", "CCSFS", "Cape Canaveral Space Force Station"],
        "johnson-space-center": ["JSC", "Houston", "Mission Control"],
        "jet-propulsion-laboratory": ["JPL"],
        "marshall-space-flight-center": ["Marshall", "MSFC", "Huntsville"],
        "goddard-space-flight-center": ["Goddard", "GSFC"]
    },
    parents: {
        "mercury-program": "nasa",
        "gemini-program": "nasa",
        "apollo-program": "nasa",
        "space-shuttle-program": "nasa",
        "artemis-program": "nasa",
        "voyager-program": "nasa",
        "mars-exploration-program": "nasa",
        "apollo-11": "apollo-program",
        "saturn-v": "apollo-program",
        "orion-spacecraft": "artemis-program",
        "voyager-1": "voyager-program",
        "curiosity-rover": "mars-exploration-program",
        "perseverance-rover": "mars-exploration-program",
        "neil-armstrong": "apollo-11",
        "buzz-aldrin": "apollo-11",
        "michael-collins": "apollo-11",
        "werner-von-braun": "marshall-space-flight-center",
        "gene-kranz": "johnson-space-center",
        "christopher-kraft": "johnson-space-center",
        "sally-ride": "space-shuttle-program",
        "hubble-space-telescope": "goddard-space-flight-center",
        "kennedy-space-center": "nasa",
        "johnson-space-center": "nasa",
        "jet-propulsion-laboratory": "nasa",
        "marshall-space-flight-center": "nasa",
        "goddard-space-flight-center": "nasa"
    }
});
