/**
 * Urban planning history — Built environment subject package.
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
        id: "urban-planning-history",
        name: "Urban planning history",
        rootSlug: "urban-planning-history",
        theme: "urban-planning-history",
        categories: ["built-environment"],
        copyright: {
            title: "Urban planning history is not owned by Ton-o-Lore.",
            body:
                "Urban planning history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "urban-planning-history": ["Urban planning history"]
    },
    parents: {}
});
