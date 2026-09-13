/**
 * Root — Tabletop subject package.
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
        id: "root-board-game",
        name: "Root",
        rootSlug: "root-board-game",
        theme: "root-board-game",
        categories: ["tabletop"],
        copyright: {
            title: "Root is not owned by Ton-o-Lore.",
            body:
                "Root, related names, marks, and materials are the property of Leder Games / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "root-board-game": ["Root"]
    },
    parents: {}
});
