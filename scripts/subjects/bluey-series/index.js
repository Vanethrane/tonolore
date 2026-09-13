/**
 * Bluey — Western animation subject package.
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
        id: "bluey-series",
        name: "Bluey",
        rootSlug: "bluey-series",
        theme: "bluey-series",
        categories: ["western-animation"],
        copyright: {
            title: "Bluey is not owned by Ton-o-Lore.",
            body:
                "Bluey, related names, marks, and materials are the property of Ludo / BBC / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "bluey-series": ["Bluey"]
    },
    parents: {}
});
