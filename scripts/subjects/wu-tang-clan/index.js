/**
 * Wu-Tang Clan — Hip-hop subject package.
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
        id: "wu-tang-clan",
        name: "Wu-Tang Clan",
        rootSlug: "wu-tang-clan",
        theme: "wu-tang-clan",
        categories: ["music"],
        musicGenre: "hip-hop",
        copyright: {
            title: "Wu-Tang Clan is not owned by Ton-o-Lore.",
            body:
                "Wu-Tang Clan, related names, logos, recordings, and imagery are the property of Wu-Tang Productions / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "wu-tang-clan": ["Wu-Tang Clan"]
    },
    parents: {}
});
