/**
 * Street food history — Food & drink subject package.
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
        id: "street-food-history",
        name: "Street food history",
        rootSlug: "street-food-history",
        theme: "street-food-history",
        categories: ["culinary"],
        copyright: {
            title: "Street food history is not owned by Ton-o-Lore.",
            body:
                "Street food history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "street-food-history": ["Street food history"]
    },
    parents: {}
});
