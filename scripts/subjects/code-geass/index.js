/**
 * Code Geass — Anime subject package.
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
        id: "code-geass",
        name: "Code Geass",
        rootSlug: "code-geass",
        theme: "code-geass",
        categories: ["anime"],
        copyright: {
            title: "Code Geass is not owned by Ton-o-Lore.",
            body:
                "Code Geass, related names, marks, and materials are the property of Sunrise / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "code-geass": ["Code Geass"]
    },
    parents: {}
});
