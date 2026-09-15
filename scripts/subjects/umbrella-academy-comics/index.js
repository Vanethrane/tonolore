/**
 * The Umbrella Academy — Comics & manga subject package.
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
        id: "umbrella-academy-comics",
        name: "The Umbrella Academy",
        rootSlug: "umbrella-academy-comics",
        theme: "umbrella-academy-comics",
        categories: ["comics"],
        copyright: {
            title: "The Umbrella Academy is not owned by Ton-o-Lore.",
            body:
                "The Umbrella Academy, related names, marks, and materials are the property of Dark Horse / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "umbrella-academy-comics": ["The Umbrella Academy"]
    },
    parents: {}
});
