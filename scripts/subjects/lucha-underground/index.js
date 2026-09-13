/**
 * Lucha Underground — Pro wrestling subject package.
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
        id: "lucha-underground",
        name: "Lucha Underground",
        rootSlug: "lucha-underground",
        theme: "lucha-underground",
        categories: ["wrestling"],
        copyright: {
            title: "Lucha Underground is not owned by Ton-o-Lore.",
            body:
                "Lucha Underground, related names, marks, and materials are the property of El Rey / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "lucha-underground": ["Lucha Underground"]
    },
    parents: {}
});
