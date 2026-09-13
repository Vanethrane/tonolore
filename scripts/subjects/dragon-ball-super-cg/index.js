/**
 * Dragon Ball Super Card Game — Card games subject package.
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
        id: "dragon-ball-super-cg",
        name: "Dragon Ball Super Card Game",
        rootSlug: "dragon-ball-super-cg",
        theme: "dragon-ball-super-cg",
        categories: ["card-games"],
        copyright: {
            title: "Dragon Ball Super Card Game is not owned by Ton-o-Lore.",
            body:
                "Dragon Ball Super Card Game, related names, marks, and materials are the property of Bandai / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dragon-ball-super-cg": ["Dragon Ball Super Card Game"]
    },
    parents: {}
});
