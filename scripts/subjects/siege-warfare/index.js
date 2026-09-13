/**
 * Siege warfare — Military & fortresses subject package.
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
        id: "siege-warfare",
        name: "Siege warfare",
        rootSlug: "siege-warfare",
        theme: "siege-warfare",
        categories: ["military"],
        copyright: {
            title: "Siege warfare is not owned by Ton-o-Lore.",
            body:
                "Siege warfare, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "siege-warfare": ["Siege warfare"]
    },
    parents: {}
});
