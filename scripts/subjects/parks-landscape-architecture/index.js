/**
 * Parks & landscape architecture — Built environment subject package.
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
        id: "parks-landscape-architecture",
        name: "Parks & landscape architecture",
        rootSlug: "parks-landscape-architecture",
        theme: "parks-landscape-architecture",
        categories: ["built-environment"],
        copyright: {
            title: "Parks & landscape architecture is not owned by Ton-o-Lore.",
            body:
                "Parks & landscape architecture, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "parks-landscape-architecture": ["Parks & landscape architecture"]
    },
    parents: {}
});
