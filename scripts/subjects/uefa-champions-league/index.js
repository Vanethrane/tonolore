/**
 * UEFA Champions League — Soccer subject package.
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
        id: "uefa-champions-league",
        name: "UEFA Champions League",
        rootSlug: "uefa-champions-league",
        theme: "uefa-champions-league",
        categories: ["sports"],
        sportsSport: "soccer",
        copyright: {
            title: "UEFA Champions League is not owned by Ton-o-Lore.",
            body:
                "UEFA Champions League, related names, marks, and materials are the property of UEFA / respective clubs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "uefa-champions-league": ["UEFA Champions League"]
    },
    parents: {}
});
