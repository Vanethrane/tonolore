/**
 * Gothic cathedrals — Built environment subject package.
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
        id: "gothic-cathedrals",
        name: "Gothic cathedrals",
        rootSlug: "gothic-cathedrals",
        theme: "gothic-cathedrals",
        categories: ["built-environment"],
        copyright: {
            title: "Gothic cathedrals is not owned by Ton-o-Lore.",
            body:
                "Gothic cathedrals, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "gothic-cathedrals": ["Gothic cathedrals"]
    },
    parents: {}
});
