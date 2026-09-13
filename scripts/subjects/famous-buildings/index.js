/**
 * Famous buildings — Built environment subject package.
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
        id: "famous-buildings",
        name: "Famous buildings",
        rootSlug: "famous-buildings",
        theme: "famous-buildings",
        categories: ["built-environment"],
        copyright: {
            title: "Famous buildings is not owned by Ton-o-Lore.",
            body:
                "Famous buildings, related names, marks, and materials are the property of Public architectural history / respective owners, estates, and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "famous-buildings": ["Famous buildings"]
    },
    parents: {}
});
