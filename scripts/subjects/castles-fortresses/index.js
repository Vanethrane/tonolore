/**
 * Castles & fortresses — Military & fortresses subject package.
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
        id: "castles-fortresses",
        name: "Castles & fortresses",
        rootSlug: "castles-fortresses",
        theme: "castles-fortresses",
        categories: ["military"],
        copyright: {
            title: "Castles & fortresses is not owned by Ton-o-Lore.",
            body:
                "Castles & fortresses, related names, marks, and materials are the property of Public historical and architectural record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "castles-fortresses": ["Castles & fortresses"]
    },
    parents: {}
});
