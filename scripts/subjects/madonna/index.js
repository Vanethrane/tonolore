/**
 * Madonna — Pop subject package.
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
        id: "madonna",
        name: "Madonna",
        rootSlug: "madonna",
        theme: "madonna",
        categories: ["music"],
        musicGenre: "pop",
        copyright: {
            title: "Madonna is not owned by Ton-o-Lore.",
            body:
                "Madonna, related names, logos, recordings, and imagery are the property of Madonna / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "madonna": ["Madonna"]
    },
    parents: {}
});
