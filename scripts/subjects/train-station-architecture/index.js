/**
 * Train station architecture — Built environment subject package.
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
        id: "train-station-architecture",
        name: "Train station architecture",
        rootSlug: "train-station-architecture",
        theme: "train-station-architecture",
        categories: ["built-environment"],
        copyright: {
            title: "Train station architecture is not owned by Ton-o-Lore.",
            body:
                "Train station architecture, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "train-station-architecture": ["Train station architecture"]
    },
    parents: {}
});
