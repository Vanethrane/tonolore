/**
 * Castle architecture — Built environment subject package.
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
        id: "castles-architecture",
        name: "Castle architecture",
        rootSlug: "castles-architecture",
        theme: "castles-architecture",
        categories: ["built-environment"],
        copyright: {
            title: "Castle architecture is not owned by Ton-o-Lore.",
            body:
                "Castle architecture, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "castles-architecture": ["Castle architecture"]
    },
    parents: {}
});
