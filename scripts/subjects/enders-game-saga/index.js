/**
 * Ender's Game saga — Books & literature subject package.
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
        id: "enders-game-saga",
        name: "Ender's Game saga",
        rootSlug: "enders-game-saga",
        theme: "enders-game-saga",
        categories: ["books"],
        copyright: {
            title: "Ender's Game saga is not owned by Ton-o-Lore.",
            body:
                "Ender's Game saga, related names, marks, and materials are the property of Orson Scott Card / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "enders-game-saga": ["Ender's Game saga"]
    },
    parents: {}
});
