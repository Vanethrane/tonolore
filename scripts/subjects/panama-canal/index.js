/**
 * Panama Canal — Maritime subject package.
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
        id: "panama-canal",
        name: "Panama Canal",
        rootSlug: "panama-canal",
        theme: "panama-canal",
        categories: ["maritime"],
        copyright: {
            title: "Panama Canal is not owned by Ton-o-Lore.",
            body:
                "Panama Canal, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "panama-canal": ["Panama Canal"]
    },
    parents: {}
});
