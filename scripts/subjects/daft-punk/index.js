/**
 * Daft Punk — Electronic subject package.
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
        id: "daft-punk",
        name: "Daft Punk",
        rootSlug: "daft-punk",
        theme: "daft-punk",
        categories: ["music"],
        musicGenre: "electronic",
        copyright: {
            title: "Daft Punk is not owned by Ton-o-Lore.",
            body:
                "Daft Punk, related names, logos, recordings, and imagery are the property of Daft Punk / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "daft-punk": ["Daft Punk"]
    },
    parents: {}
});
