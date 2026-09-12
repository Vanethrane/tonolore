/**
 * ECW — Pro wrestling subject package.
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
        id: "ecw",
        name: "ECW",
        rootSlug: "ecw",
        theme: "ecw",
        categories: ["wrestling"],
        copyright: {
            title: "ECW is not owned by Ton-o-Lore.",
            body:
                "ECW, related names, marks, and materials are the property of WWE / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ecw": ["ECW"]
    },
    parents: {}
});
