/**
 * American Revolutionary War — Military & fortresses subject package.
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
        id: "american-revolutionary-war",
        name: "American Revolutionary War",
        rootSlug: "american-revolutionary-war",
        theme: "american-revolutionary-war",
        categories: ["military"],
        copyright: {
            title: "American Revolutionary War is not owned by Ton-o-Lore.",
            body:
                "American Revolutionary War, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "american-revolutionary-war": ["American Revolutionary War"]
    },
    parents: {}
});
