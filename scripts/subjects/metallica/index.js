/**
 * Metallica — Metal subject package.
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
        id: "metallica",
        name: "Metallica",
        rootSlug: "metallica",
        theme: "metallica",
        categories: ["music"],
        musicGenre: "metal",
        copyright: {
            title: "Metallica is not owned by Ton-o-Lore.",
            body:
                "Metallica, related names, logos, recordings, and imagery are the property of Metallica / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "metallica": ["Metallica"]
    },
    parents: {}
});
