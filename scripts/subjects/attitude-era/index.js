/**
 * Attitude Era — Pro wrestling subject package.
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
        id: "attitude-era",
        name: "Attitude Era",
        rootSlug: "attitude-era",
        theme: "attitude-era",
        categories: ["wrestling"],
        copyright: {
            title: "Attitude Era is not owned by Ton-o-Lore.",
            body:
                "Attitude Era, related names, marks, and materials are the property of WWE / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "attitude-era": ["Attitude Era"]
    },
    parents: {}
});
