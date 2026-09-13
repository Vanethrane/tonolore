/**
 * G1 Climax — Pro wrestling subject package.
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
        id: "g1-climax",
        name: "G1 Climax",
        rootSlug: "g1-climax",
        theme: "g1-climax",
        categories: ["wrestling"],
        copyright: {
            title: "G1 Climax is not owned by Ton-o-Lore.",
            body:
                "G1 Climax, related names, marks, and materials are the property of NJPW / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "g1-climax": ["G1 Climax"]
    },
    parents: {}
});
