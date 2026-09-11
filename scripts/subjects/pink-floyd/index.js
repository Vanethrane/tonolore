/**
 * Pink Floyd — Rock subject package.
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
        id: "pink-floyd",
        name: "Pink Floyd",
        rootSlug: "pink-floyd",
        theme: "pink-floyd",
        categories: ["music"],
        musicGenre: "rock",
        copyright: {
            title: "Pink Floyd is not owned by Ton-o-Lore.",
            body:
                "Pink Floyd, related names, logos, recordings, and imagery are the property of Pink Floyd Ltd. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "pink-floyd": ["Pink Floyd"]
    },
    parents: {}
});
