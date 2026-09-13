/**
 * Skinwalker Ranch — Unexplained subject package.
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
        id: "skinwalker-ranch",
        name: "Skinwalker Ranch",
        rootSlug: "skinwalker-ranch",
        theme: "skinwalker-ranch",
        categories: ["unexplained"],
        copyright: {
            title: "Skinwalker Ranch is not owned by Ton-o-Lore.",
            body:
                "Skinwalker Ranch, related names, marks, and materials are the property of Public / media rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "skinwalker-ranch": ["Skinwalker Ranch"]
    },
    parents: {}
});
