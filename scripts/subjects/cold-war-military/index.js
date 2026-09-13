/**
 * Cold War military history — Military & fortresses subject package.
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
        id: "cold-war-military",
        name: "Cold War military history",
        rootSlug: "cold-war-military",
        theme: "cold-war-military",
        categories: ["military"],
        copyright: {
            title: "Cold War military history is not owned by Ton-o-Lore.",
            body:
                "Cold War military history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "cold-war-military": ["Cold War military history"]
    },
    parents: {}
});
