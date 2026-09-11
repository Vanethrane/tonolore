/**
 * Ludwig van Beethoven — Classical subject package.
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
        id: "ludwig-van-beethoven",
        name: "Ludwig van Beethoven",
        rootSlug: "ludwig-van-beethoven",
        theme: "ludwig-van-beethoven",
        categories: ["music"],
        musicGenre: "classical",
        copyright: {
            title: "Ludwig van Beethoven is not owned by Ton-o-Lore.",
            body:
                "Ludwig van Beethoven, related names, logos, recordings, and imagery are the property of Public-domain compositions; editions and marks © respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ludwig-van-beethoven": ["Ludwig van Beethoven"]
    },
    parents: {}
});
