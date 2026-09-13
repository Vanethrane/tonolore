/**
 * CMLL — Pro wrestling subject package.
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
        id: "cmll-wrestling",
        name: "CMLL",
        rootSlug: "cmll-wrestling",
        theme: "cmll-wrestling",
        categories: ["wrestling"],
        copyright: {
            title: "CMLL is not owned by Ton-o-Lore.",
            body:
                "CMLL, related names, marks, and materials are the property of CMLL / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "cmll-wrestling": ["CMLL"]
    },
    parents: {}
});
