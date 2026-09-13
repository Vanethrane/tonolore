/**
 * The Blair Witch Project — Horror subject package.
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
        id: "blair-witch",
        name: "The Blair Witch Project",
        rootSlug: "blair-witch",
        theme: "blair-witch",
        categories: ["horror"],
        copyright: {
            title: "The Blair Witch Project is not owned by Ton-o-Lore.",
            body:
                "The Blair Witch Project, related names, marks, and materials are the property of Lionsgate / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "blair-witch": ["The Blair Witch Project"]
    },
    parents: {}
});
