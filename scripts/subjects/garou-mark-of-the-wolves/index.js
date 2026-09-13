/**
 * Garou: Mark of the Wolves — Fighting games subject package.
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
        id: "garou-mark-of-the-wolves",
        name: "Garou: Mark of the Wolves",
        rootSlug: "garou-mark-of-the-wolves",
        theme: "garou-mark-of-the-wolves",
        categories: ["fighting-games"],
        copyright: {
            title: "Garou: Mark of the Wolves is not owned by Ton-o-Lore.",
            body:
                "Garou: Mark of the Wolves, related names, marks, and materials are the property of SNK / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "garou-mark-of-the-wolves": ["Garou: Mark of the Wolves"]
    },
    parents: {}
});
