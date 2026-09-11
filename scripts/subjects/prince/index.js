/**
 * Prince — Pop subject package.
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
        id: "prince",
        name: "Prince",
        rootSlug: "prince",
        theme: "prince",
        categories: ["music"],
        musicGenre: "pop",
        copyright: {
            title: "Prince is not owned by Ton-o-Lore.",
            body:
                "Prince, related names, logos, recordings, and imagery are the property of Estate of Prince / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "prince": ["Prince"]
    },
    parents: {}
});
