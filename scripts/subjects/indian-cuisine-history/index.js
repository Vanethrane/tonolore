/**
 * Indian cuisine history — Food & drink subject package.
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
        id: "indian-cuisine-history",
        name: "Indian cuisine history",
        rootSlug: "indian-cuisine-history",
        theme: "indian-cuisine-history",
        categories: ["culinary"],
        copyright: {
            title: "Indian cuisine history is not owned by Ton-o-Lore.",
            body:
                "Indian cuisine history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "indian-cuisine-history": ["Indian cuisine history"]
    },
    parents: {}
});
