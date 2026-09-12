/**
 * Super Bowl — American football subject package.
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
        id: "super-bowl",
        name: "Super Bowl",
        rootSlug: "super-bowl",
        theme: "super-bowl",
        categories: ["sports"],
        sportsSport: "american-football",
        copyright: {
            title: "Super Bowl is not owned by Ton-o-Lore.",
            body:
                "Super Bowl, related names, marks, and materials are the property of NFL / respective clubs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "super-bowl": ["Super Bowl"]
    },
    parents: {}
});
