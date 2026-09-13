/**
 * French cuisine history — Food & drink subject package.
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
        id: "french-cuisine-history",
        name: "French cuisine history",
        rootSlug: "french-cuisine-history",
        theme: "french-cuisine-history",
        categories: ["culinary"],
        copyright: {
            title: "French cuisine history is not owned by Ton-o-Lore.",
            body:
                "French cuisine history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "french-cuisine-history": ["French cuisine history"]
    },
    parents: {}
});
