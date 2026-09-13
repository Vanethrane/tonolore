/**
 * Korean War — Military & fortresses subject package.
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
        id: "korean-war",
        name: "Korean War",
        rootSlug: "korean-war",
        theme: "korean-war",
        categories: ["military"],
        copyright: {
            title: "Korean War is not owned by Ton-o-Lore.",
            body:
                "Korean War, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "korean-war": ["Korean War"]
    },
    parents: {}
});
