/**
 * Deadpool — Comics & manga subject package.
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
        id: "deadpool-comics",
        name: "Deadpool",
        rootSlug: "deadpool-comics",
        theme: "deadpool-comics",
        categories: ["comics"],
        copyright: {
            title: "Deadpool is not owned by Ton-o-Lore.",
            body:
                "Deadpool, related names, marks, and materials are the property of Marvel / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "deadpool-comics": ["Deadpool"]
    },
    parents: {}
});
