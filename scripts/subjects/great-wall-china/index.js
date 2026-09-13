/**
 * Great Wall of China — Built environment subject package.
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
        id: "great-wall-china",
        name: "Great Wall of China",
        rootSlug: "great-wall-china",
        theme: "great-wall-china",
        categories: ["built-environment"],
        copyright: {
            title: "Great Wall of China is not owned by Ton-o-Lore.",
            body:
                "Great Wall of China, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "great-wall-china": ["Great Wall of China"]
    },
    parents: {}
});
