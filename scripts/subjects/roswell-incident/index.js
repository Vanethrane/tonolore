/**
 * Roswell incident — Unexplained subject package.
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
        id: "roswell-incident",
        name: "Roswell incident",
        rootSlug: "roswell-incident",
        theme: "roswell-incident",
        categories: ["unexplained"],
        copyright: {
            title: "Roswell incident is not owned by Ton-o-Lore.",
            body:
                "Roswell incident, related names, marks, and materials are the property of Public historical record / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "roswell-incident": ["Roswell incident"]
    },
    parents: {}
});
