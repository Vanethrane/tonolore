/**
 * Johann Sebastian Bach — Classical subject package.
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
        id: "johann-sebastian-bach",
        name: "Johann Sebastian Bach",
        rootSlug: "johann-sebastian-bach",
        theme: "johann-sebastian-bach",
        categories: ["music"],
        musicGenre: "classical",
        copyright: {
            title: "Johann Sebastian Bach is not owned by Ton-o-Lore.",
            body:
                "Johann Sebastian Bach, related names, logos, recordings, and imagery are the property of Public-domain compositions; editions and marks © respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "johann-sebastian-bach": ["Johann Sebastian Bach"]
    },
    parents: {}
});
