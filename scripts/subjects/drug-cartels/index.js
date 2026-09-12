/**
 * Drug cartels — Crime & underworld subject package.
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
        id: "drug-cartels",
        name: "Drug cartels",
        rootSlug: "drug-cartels",
        theme: "drug-cartels",
        categories: ["crime"],
        copyright: {
            title: "Drug cartels is not owned by Ton-o-Lore.",
            body:
                "Drug cartels, related names, marks, and materials are the property of Public historical and legal record / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "drug-cartels": ["Drug cartels"]
    },
    parents: {}
});
