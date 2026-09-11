/**
 * Michael Jackson — Pop subject package.
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
        id: "michael-jackson",
        name: "Michael Jackson",
        rootSlug: "michael-jackson",
        theme: "michael-jackson",
        categories: ["music"],
        musicGenre: "pop",
        copyright: {
            title: "Michael Jackson is not owned by Ton-o-Lore.",
            body:
                "Michael Jackson, related names, logos, recordings, and imagery are the property of Estate of Michael Jackson / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "michael-jackson": ["Michael Jackson"]
    },
    parents: {}
});
