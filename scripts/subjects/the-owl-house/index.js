/**
 * The Owl House — Western animation subject package.
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
        id: "the-owl-house",
        name: "The Owl House",
        rootSlug: "the-owl-house",
        theme: "the-owl-house",
        categories: ["western-animation"],
        copyright: {
            title: "The Owl House is not owned by Ton-o-Lore.",
            body:
                "The Owl House, related names, marks, and materials are the property of Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-owl-house": ["The Owl House"]
    },
    parents: {}
});
