/**
 * Sword Art Online — Anime subject package.
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
        id: "sword-art-online",
        name: "Sword Art Online",
        rootSlug: "sword-art-online",
        theme: "sword-art-online",
        categories: ["anime"],
        copyright: {
            title: "Sword Art Online is not owned by Ton-o-Lore.",
            body:
                "Sword Art Online, related names, marks, and materials are the property of ASCII Media Works / A-1 / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "sword-art-online": ["Sword Art Online"]
    },
    parents: {}
});
