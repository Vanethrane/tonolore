/**
 * Elden Ring — Video games subject package.
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
        id: "elden-ring",
        name: "Elden Ring",
        rootSlug: "elden-ring",
        theme: "elden-ring",
        categories: ["video-games"],
        copyright: {
            title: "Elden Ring is not owned by Ton-o-Lore.",
            body:
                "Elden Ring, related names, marks, and materials are the property of FromSoftware / Bandai Namco / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "elden-ring": ["Elden Ring"]
    },
    parents: {}
});
