/**
 * Twin Peaks — Horror subject package.
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
        id: "twin-peaks-horror",
        name: "Twin Peaks",
        rootSlug: "twin-peaks-horror",
        theme: "twin-peaks-horror",
        categories: ["horror"],
        copyright: {
            title: "Twin Peaks is not owned by Ton-o-Lore.",
            body:
                "Twin Peaks, related names, marks, and materials are the property of Lynch/Frost / Showtime / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "twin-peaks-horror": ["Twin Peaks"]
    },
    parents: {}
});
