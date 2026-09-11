/**
 * Led Zeppelin — Rock subject package.
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
        id: "led-zeppelin",
        name: "Led Zeppelin",
        rootSlug: "led-zeppelin",
        theme: "led-zeppelin",
        categories: ["music"],
        musicGenre: "rock",
        copyright: {
            title: "Led Zeppelin is not owned by Ton-o-Lore.",
            body:
                "Led Zeppelin, related names, logos, recordings, and imagery are the property of Led Zeppelin / Warner Music / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "led-zeppelin": ["Led Zeppelin"]
    },
    parents: {}
});
