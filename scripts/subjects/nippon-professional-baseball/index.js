/**
 * Nippon Professional Baseball — Baseball subject package.
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
        id: "nippon-professional-baseball",
        name: "Nippon Professional Baseball",
        rootSlug: "nippon-professional-baseball",
        theme: "nippon-professional-baseball",
        categories: ["sports"],
        sportsSport: "baseball",
        copyright: {
            title: "Nippon Professional Baseball is not owned by Ton-o-Lore.",
            body:
                "Nippon Professional Baseball, related names, marks, and materials are the property of NPB / respective clubs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "nippon-professional-baseball": ["Nippon Professional Baseball"]
    },
    parents: {}
});
