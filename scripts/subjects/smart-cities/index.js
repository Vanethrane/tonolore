/**
 * Smart cities — Built environment subject package.
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
        id: "smart-cities",
        name: "Smart cities",
        rootSlug: "smart-cities",
        theme: "smart-cities",
        categories: ["built-environment"],
        copyright: {
            title: "Smart cities is not owned by Ton-o-Lore.",
            body:
                "Smart cities, related names, marks, and materials are the property of Public tech/urban discourse / respective projects. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "smart-cities": ["Smart cities"]
    },
    parents: {}
});
