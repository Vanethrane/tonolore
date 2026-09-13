/**
 * The Cabin in the Woods — Horror subject package.
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
        id: "cabin-in-the-woods-lore",
        name: "The Cabin in the Woods",
        rootSlug: "cabin-in-the-woods-lore",
        theme: "cabin-in-the-woods-lore",
        categories: ["horror"],
        copyright: {
            title: "The Cabin in the Woods is not owned by Ton-o-Lore.",
            body:
                "The Cabin in the Woods, related names, marks, and materials are the property of Lionsgate / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "cabin-in-the-woods-lore": ["The Cabin in the Woods"]
    },
    parents: {}
});
