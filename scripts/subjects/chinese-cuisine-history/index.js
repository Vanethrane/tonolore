/**
 * Chinese cuisine history — Food & drink subject package.
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
        id: "chinese-cuisine-history",
        name: "Chinese cuisine history",
        rootSlug: "chinese-cuisine-history",
        theme: "chinese-cuisine-history",
        categories: ["culinary"],
        copyright: {
            title: "Chinese cuisine history is not owned by Ton-o-Lore.",
            body:
                "Chinese cuisine history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "chinese-cuisine-history": ["Chinese cuisine history"]
    },
    parents: {}
});
