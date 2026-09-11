/**
 * AEW — Pro wrestling subject package.
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
        id: "aew",
        name: "AEW",
        rootSlug: "aew",
        theme: "aew",
        categories: ["wrestling"],
        copyright: {
            title: "AEW is not owned by Ton-o-Lore.",
            body:
                "AEW, related names, marks, and materials are the property of All Elite Wrestling / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "aew": ["AEW"]
    },
    parents: {}
});
