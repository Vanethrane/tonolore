/**
 * Black Mirror (TV shelf) — Television subject package.
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
        id: "black-mirror-tv",
        name: "Black Mirror (TV shelf)",
        rootSlug: "black-mirror-tv",
        theme: "black-mirror-tv",
        categories: ["television"],
        copyright: {
            title: "Black Mirror (TV shelf) is not owned by Ton-o-Lore.",
            body:
                "Black Mirror (TV shelf), related names, marks, and materials are the property of Netflix / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "black-mirror-tv": ["Black Mirror (TV shelf)"]
    },
    parents: {}
});
