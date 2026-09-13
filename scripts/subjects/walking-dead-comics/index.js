/**
 * The Walking Dead — Comics & manga subject package.
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
        id: "walking-dead-comics",
        name: "The Walking Dead",
        rootSlug: "walking-dead-comics",
        theme: "walking-dead-comics",
        categories: ["comics"],
        copyright: {
            title: "The Walking Dead is not owned by Ton-o-Lore.",
            body:
                "The Walking Dead, related names, marks, and materials are the property of Image Comics / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "walking-dead-comics": ["The Walking Dead"]
    },
    parents: {}
});
