/**
 * Red Dead Redemption — Video games subject package.
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
        id: "red-dead-redemption",
        name: "Red Dead Redemption",
        rootSlug: "red-dead-redemption",
        theme: "red-dead-redemption",
        categories: ["video-games"],
        copyright: {
            title: "Red Dead Redemption is not owned by Ton-o-Lore.",
            body:
                "Red Dead Redemption, related names, marks, and materials are the property of Rockstar / Take-Two / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "red-dead-redemption": ["Red Dead Redemption"]
    },
    parents: {}
});
