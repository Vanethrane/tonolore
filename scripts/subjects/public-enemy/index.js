/**
 * Public Enemy — Hip-hop subject package.
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
        id: "public-enemy",
        name: "Public Enemy",
        rootSlug: "public-enemy",
        theme: "public-enemy",
        categories: ["music"],
        musicGenre: "hip-hop",
        copyright: {
            title: "Public Enemy is not owned by Ton-o-Lore.",
            body:
                "Public Enemy, related names, logos, recordings, and imagery are the property of Public Enemy / Def Jam / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "public-enemy": ["Public Enemy"]
    },
    parents: {}
});
