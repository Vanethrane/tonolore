/**
 * Let's Play culture — Internet culture subject package.
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
        id: "lets-play-culture",
        name: "Let's Play culture",
        rootSlug: "lets-play-culture",
        theme: "lets-play-culture",
        categories: ["internet-culture"],
        copyright: {
            title: "Let's Play culture is not owned by Ton-o-Lore.",
            body:
                "Let's Play culture, related names, marks, and materials are the property of Creator communities / respective platforms. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "lets-play-culture": ["Let's Play culture"]
    },
    parents: {}
});
