/**
 * Cowboy Bebop — Anime subject package.
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
        id: "cowboy-bebop",
        name: "Cowboy Bebop",
        rootSlug: "cowboy-bebop",
        theme: "cowboy-bebop",
        categories: ["anime"],
        copyright: {
            title: "Cowboy Bebop is not owned by Ton-o-Lore.",
            body:
                "Cowboy Bebop, related names, marks, and materials are the property of Sunrise / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "cowboy-bebop": ["Cowboy Bebop"]
    },
    parents: {}
});
