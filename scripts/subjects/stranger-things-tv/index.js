/**
 * Stranger Things (TV shelf) — Television subject package.
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
        id: "stranger-things-tv",
        name: "Stranger Things (TV shelf)",
        rootSlug: "stranger-things-tv",
        theme: "stranger-things-tv",
        categories: ["television"],
        copyright: {
            title: "Stranger Things (TV shelf) is not owned by Ton-o-Lore.",
            body:
                "Stranger Things (TV shelf), related names, marks, and materials are the property of Netflix / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "stranger-things-tv": ["Stranger Things (TV shelf)"]
    },
    parents: {}
});
