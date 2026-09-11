/**
 * Chess subject package.
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
        id: "chess",
        name: "Chess",
        rootSlug: "chess",
        theme: "chess",
        categories: ["tabletop"],
        copyright: {
            title: "Chess is not owned by Ton-o-Lore.",
            body:
                "Chess, related names, logos, and game materials are the property of Public-domain rules; branded editions © respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "chess": ["Chess"]
    },
    parents: {}
});
