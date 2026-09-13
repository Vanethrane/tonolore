/**
 * Italian cuisine history — Food & drink subject package.
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
        id: "italian-cuisine-history",
        name: "Italian cuisine history",
        rootSlug: "italian-cuisine-history",
        theme: "italian-cuisine-history",
        categories: ["culinary"],
        copyright: {
            title: "Italian cuisine history is not owned by Ton-o-Lore.",
            body:
                "Italian cuisine history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "italian-cuisine-history": ["Italian cuisine history"]
    },
    parents: {}
});
