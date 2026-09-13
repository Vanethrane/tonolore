/**
 * Diablo — Video games subject package.
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
        id: "diablo",
        name: "Diablo",
        rootSlug: "diablo",
        theme: "diablo",
        categories: ["video-games"],
        copyright: {
            title: "Diablo is not owned by Ton-o-Lore.",
            body:
                "Diablo, related names, marks, and materials are the property of Blizzard / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "diablo": ["Diablo"]
    },
    parents: {}
});
