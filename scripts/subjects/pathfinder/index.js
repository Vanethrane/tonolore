/**
 * Pathfinder subject package — Paizo's Golarion fantasy RPG.
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
        id: "pathfinder",
        name: "Pathfinder",
        rootSlug: "pathfinder",
        theme: "pathfinder",
        copyright: {
            title: "Pathfinder is not owned by Ton-o-Lore.",
            body:
                "Pathfinder, Starfinder, Golarion, their characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Paizo Inc. and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        pathfinder: ["Pathfinder RPG", "PF", "Pathfinder Roleplaying Game"],
        paizo: ["Paizo Inc.", "Paizo Publishing"],
        "jason-bulmahn": ["Bulmahn"],
        "eric-mona": ["Mona"],
        "pathfinder-first-edition": ["PF1e", "Pathfinder 1e", "PF1"],
        "pathfinder-second-edition": ["PF2e", "Pathfinder 2e", "PF2"],
        "pathfinder-core-rulebook": ["Core Rulebook", "CRB", "Pathfinder CRB"],
        starfinder: ["Starfinder RPG", "SF RPG"],
        "pathfinder-society": ["PFS", "Pathfinder Organized Play", "Society"],
        "adventure-paths": ["Adventure Path", "AP"],
        "rise-of-the-runelords": ["Runelords", "RotR AP"],
        golarion: ["Golarion setting", "World of Golarion"],
        "inner-sea": ["Inner Sea", "Inner Sea Region"],
        absalom: ["City of Absalom", "Absalom city"],
        varisia: ["Varisia region"],
        andoran: ["Republic of Andoran"],
        cheliax: ["Cheliax empire", "Empire of Cheliax"],
        valeros: ["Valeros iconic"],
        merisiel: ["Merisiel iconic"],
        seelah: ["Seelah iconic"],
        kyra: ["Kyra iconic"],
        abadar: ["Abadar god"],
        torag: ["Torag god"],
        shelyn: ["Shelyn goddess"],
        asmodeus: ["Asmodeus archdevil", "Prince of Darkness"],
        pharasma: ["Pharasma goddess", "Lady of Graves"],
        goblins: ["Goblin", "Pathfinder goblins"],
        "three-action-economy": ["Three actions", "2e action economy"],
        archetypes: ["Pathfinder archetypes", "2e archetypes"],
        "age-of-lost-omens": ["Lost Omens", "Age of Lost Omens era"],
        "grand-lodge": ["Pathfinder Grand Lodge", "Society headquarters"]
    },
    parents: {
        "pathfinder-first-edition": "pathfinder",
        "pathfinder-second-edition": "pathfinder",
        "pathfinder-core-rulebook": "pathfinder-second-edition",
        starfinder: "pathfinder",
        "pathfinder-society": "pathfinder",
        "adventure-paths": "pathfinder",
        "rise-of-the-runelords": "adventure-paths",
        golarion: "pathfinder",
        "inner-sea": "golarion",
        absalom: "inner-sea",
        varisia: "golarion",
        andoran: "inner-sea",
        cheliax: "inner-sea",
        valeros: "pathfinder",
        merisiel: "pathfinder",
        seelah: "pathfinder",
        kyra: "pathfinder",
        abadar: "golarion",
        torag: "golarion",
        shelyn: "golarion",
        asmodeus: "golarion",
        pharasma: "golarion",
        goblins: "golarion",
        "three-action-economy": "pathfinder-second-edition",
        archetypes: "pathfinder-second-edition",
        "age-of-lost-omens": "golarion",
        "grand-lodge": "pathfinder-society"
    }
});
