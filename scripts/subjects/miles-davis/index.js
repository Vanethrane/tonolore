/**
 * Miles Davis — Jazz subject package.
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
        id: "miles-davis",
        name: "Miles Davis",
        rootSlug: "miles-davis",
        theme: "miles-davis",
        categories: ["music"],
        musicGenre: "jazz",
        copyright: {
            title: "Miles Davis is not owned by Ton-o-Lore.",
            body:
                "Miles Davis, related names, logos, recordings, and imagery are the property of Estate of Miles Davis / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "miles-davis": ["Miles Davis"]
    },
    parents: {}
});
