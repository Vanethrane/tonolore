/**
 * Fate RPG — Tabletop subject package.
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
        id: "fate-rpg",
        name: "Fate RPG",
        rootSlug: "fate-rpg",
        theme: "fate-rpg",
        categories: ["tabletop"],
        copyright: {
            title: "Fate RPG is not owned by Ton-o-Lore.",
            body:
                "Fate RPG, related names, marks, and materials are the property of Evil Hat / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "fate-rpg": ["Fate RPG"]
    },
    parents: {}
});
