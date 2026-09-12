/**
 * Premier League — Soccer subject package.
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
        id: "premier-league",
        name: "Premier League",
        rootSlug: "premier-league",
        theme: "premier-league",
        categories: ["sports"],
        sportsSport: "soccer",
        copyright: {
            title: "Premier League is not owned by Ton-o-Lore.",
            body:
                "Premier League, related names, marks, and materials are the property of Premier League / respective clubs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "premier-league": ["Premier League"]
    },
    parents: {}
});
