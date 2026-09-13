/**
 * Andromeda — Science fiction subject package.
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
        id: "andromeda-series",
        name: "Andromeda",
        rootSlug: "andromeda-series",
        theme: "andromeda-series",
        categories: ["sci-fi"],
        copyright: {
            title: "Andromeda is not owned by Ton-o-Lore.",
            body:
                "Andromeda, related names, marks, and materials are the property of Tribune / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "andromeda-series": ["Andromeda"]
    },
    parents: {}
});
