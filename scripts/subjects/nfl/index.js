/**
 * NFL — American football subject package.
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
        id: "nfl",
        name: "NFL",
        rootSlug: "nfl",
        theme: "nfl",
        categories: ["sports"],
        sportsSport: "american-football",
        copyright: {
            title: "NFL is not owned by Ton-o-Lore.",
            body:
                "NFL, related names, marks, and materials are the property of NFL / respective clubs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "nfl": ["NFL"]
    },
    parents: {}
});
