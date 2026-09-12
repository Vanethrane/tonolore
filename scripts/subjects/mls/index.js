/**
 * Major League Soccer — Soccer subject package.
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
        id: "mls",
        name: "Major League Soccer",
        rootSlug: "mls",
        theme: "mls",
        categories: ["sports"],
        sportsSport: "soccer",
        copyright: {
            title: "Major League Soccer is not owned by Ton-o-Lore.",
            body:
                "Major League Soccer, related names, marks, and materials are the property of MLS / respective clubs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "mls": ["Major League Soccer"]
    },
    parents: {}
});
