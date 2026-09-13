/**
 * Johnstown Flood — Disasters & catastrophes subject package.
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
        id: "johnstown-flood",
        name: "Johnstown Flood",
        rootSlug: "johnstown-flood",
        theme: "johnstown-flood",
        categories: ["disasters"],
        copyright: {
            title: "Johnstown Flood is not owned by Ton-o-Lore.",
            body:
                "Johnstown Flood, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "johnstown-flood": ["Johnstown Flood"]
    },
    parents: {}
});
