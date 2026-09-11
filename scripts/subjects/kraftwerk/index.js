/**
 * Kraftwerk — Electronic subject package.
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
        id: "kraftwerk",
        name: "Kraftwerk",
        rootSlug: "kraftwerk",
        theme: "kraftwerk",
        categories: ["music"],
        musicGenre: "electronic",
        copyright: {
            title: "Kraftwerk is not owned by Ton-o-Lore.",
            body:
                "Kraftwerk, related names, logos, recordings, and imagery are the property of Kraftwerk / Kling Klang / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "kraftwerk": ["Kraftwerk"]
    },
    parents: {}
});
