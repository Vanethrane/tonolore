/**
 * Weapons & military history — Military & fortresses subject package.
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
        id: "weapons-military-history",
        name: "Weapons & military history",
        rootSlug: "weapons-military-history",
        theme: "weapons-military-history",
        categories: ["military"],
        copyright: {
            title: "Weapons & military history is not owned by Ton-o-Lore.",
            body:
                "Weapons & military history, related names, marks, and materials are the property of Public historical and technical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "weapons-military-history": ["Weapons & military history"]
    },
    parents: {}
});
