/**
 * Mass Effect subject package — BioWare's space RPG franchise.
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
        id: "mass-effect",
        name: "Mass Effect",
        rootSlug: "mass-effect",
        theme: "mass-effect",
        copyright: {
            title: "Mass Effect is not owned by Ton-o-Lore.",
            body:
                "Mass Effect, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including BioWare, Electronic Arts, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "mass-effect": ["ME", "Mass Effect franchise"],
        bioware: ["BioWare Corp", "BioWare Studios"],
        "electronic-arts": ["EA", "EA Games"],
        "mass-effect-trilogy": ["ME trilogy", "Mass Effect 1–3"],
        "mass-effect-legendary-edition": ["MELE", "Legendary Edition"],
        "mass-effect-andromeda": ["MEA", "Andromeda"],
        "commander-shepard": ["Shepard", "Spectre Shepard"],
        "garrus-vakarian": ["Garrus", "Archangel"],
        "liara-tsoni": ["Liara", "Doctor T'Soni"],
        "tali-zorah": ["Tali", "Tali'Zorah nar Rayya", "Tali'Zorah vas Normandy"],
        "illusive-man": ["Illusive Man", "Jack Harper"],
        "david-anderson": ["Anderson", "Admiral Anderson"],
        "saren-arterius": ["Saren"],
        "mordin-solus": ["Mordin"],
        "jeff-moreau": ["Joker", "Jeff Moreau"],
        udina: ["Donnel Udina", "Ambassador Udina"],
        normandy: ["Normandy SR-1", "Normandy SR-2", "SSV Normandy"],
        citadel: ["Citadel Station", "Presidium"],
        "mass-relay": ["Mass relays", "Relay network"],
        omega: ["Omega Station"],
        thessia: ["Asari homeworld"],
        "eden-prime": ["Eden Prime colony"],
        spectres: ["Special Tactics and Reconnaissance", "Spectre"],
        reapers: ["Reaper", "Old Machines"],
        geth: ["Geth Consensus"],
        quarians: ["Quarian", "Migrant Fleet"],
        turians: ["Turian", "Turian Hierarchy"],
        asari: ["Asari Republics"],
        krogan: ["Krogan clans"],
        cerberus: ["Cerberus Network"],
        "systems-alliance": ["Alliance", "Human Systems Alliance"],
        "citadel-council": ["Council", "the Council"],
        protheans: ["Prothean"],
        sovereign: ["Nazara", "Sovereign Reaper"]
    },
    parents: {
        "commander-shepard": "spectres",
        "saren-arterius": "spectres",
        spectres: "citadel-council",
        "citadel-council": "citadel",
        "garrus-vakarian": "turians",
        "liara-tsoni": "asari",
        "tali-zorah": "quarians",
        "illusive-man": "cerberus",
        "david-anderson": "systems-alliance",
        udina: "citadel-council",
        "mordin-solus": "normandy",
        sovereign: "reapers",
        "jeff-moreau": "normandy",
        "eden-prime": "systems-alliance",
        thessia: "asari",
        krogan: "citadel-council",
        "mass-effect-trilogy": "mass-effect",
        "mass-effect-legendary-edition": "mass-effect",
        "mass-effect-andromeda": "mass-effect",
        bioware: "electronic-arts"
    }
});
