/**
 * American Horror Story — Horror subject package.
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
        id: "american-horror-story",
        name: "American Horror Story",
        rootSlug: "american-horror-story",
        theme: "american-horror-story",
        categories: ["horror"],
        copyright: {
            title: "American Horror Story is not owned by Ton-o-Lore.",
            body:
                "American Horror Story, related names, marks, and materials are the property of FX / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "american-horror-story": ["American Horror Story"]
    },
    parents: {}
});
