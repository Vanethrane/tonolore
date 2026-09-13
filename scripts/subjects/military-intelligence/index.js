/**
 * Military intelligence history — Military & fortresses subject package.
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
        id: "military-intelligence",
        name: "Military intelligence history",
        rootSlug: "military-intelligence",
        theme: "military-intelligence",
        categories: ["military"],
        copyright: {
            title: "Military intelligence history is not owned by Ton-o-Lore.",
            body:
                "Military intelligence history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "military-intelligence": ["Military intelligence history"]
    },
    parents: {}
});
