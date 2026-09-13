/**
 * Assassin's Creed — Video games subject package.
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
        id: "assassin-creed",
        name: "Assassin's Creed",
        rootSlug: "assassin-creed",
        theme: "assassin-creed",
        categories: ["video-games"],
        copyright: {
            title: "Assassin's Creed is not owned by Ton-o-Lore.",
            body:
                "Assassin's Creed, related names, marks, and materials are the property of Ubisoft / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "assassin-creed": ["Assassin's Creed"]
    },
    parents: {}
});
