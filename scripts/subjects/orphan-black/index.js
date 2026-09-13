/**
 * Orphan Black — Science fiction subject package.
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
        id: "orphan-black",
        name: "Orphan Black",
        rootSlug: "orphan-black",
        theme: "orphan-black",
        categories: ["sci-fi"],
        copyright: {
            title: "Orphan Black is not owned by Ton-o-Lore.",
            body:
                "Orphan Black, related names, marks, and materials are the property of BBC America / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "orphan-black": ["Orphan Black"]
    },
    parents: {}
});
