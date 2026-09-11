/**
 * The Beatles — Rock subject package.
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
        id: "the-beatles",
        name: "The Beatles",
        rootSlug: "the-beatles",
        theme: "the-beatles",
        categories: ["music"],
        musicGenre: "rock",
        copyright: {
            title: "The Beatles is not owned by Ton-o-Lore.",
            body:
                "The Beatles, related names, logos, recordings, and imagery are the property of Apple Corps / Sony Music / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-beatles": ["The Beatles"]
    },
    parents: {}
});
