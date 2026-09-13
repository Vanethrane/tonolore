/**
 * Instagram culture — Internet culture subject package.
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
        id: "instagram-culture",
        name: "Instagram culture",
        rootSlug: "instagram-culture",
        theme: "instagram-culture",
        categories: ["internet-culture"],
        copyright: {
            title: "Instagram culture is not owned by Ton-o-Lore.",
            body:
                "Instagram culture, related names, marks, and materials are the property of Meta / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "instagram-culture": ["Instagram culture"]
    },
    parents: {}
});
