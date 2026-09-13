/**
 * Half-Life — Video games subject package.
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
        id: "half-life",
        name: "Half-Life",
        rootSlug: "half-life",
        theme: "half-life",
        categories: ["video-games"],
        copyright: {
            title: "Half-Life is not owned by Ton-o-Lore.",
            body:
                "Half-Life, related names, marks, and materials are the property of Valve / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "half-life": ["Half-Life"]
    },
    parents: {}
});
