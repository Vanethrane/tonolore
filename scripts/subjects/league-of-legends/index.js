/**
 * League of Legends — Video games subject package.
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
        id: "league-of-legends",
        name: "League of Legends",
        rootSlug: "league-of-legends",
        theme: "league-of-legends",
        categories: ["video-games"],
        copyright: {
            title: "League of Legends is not owned by Ton-o-Lore.",
            body:
                "League of Legends, related names, marks, and materials are the property of Riot Games / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "league-of-legends": ["League of Legends"]
    },
    parents: {}
});
