/**
 * Major League Baseball — Baseball subject package.
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
        id: "mlb",
        name: "Major League Baseball",
        rootSlug: "mlb",
        theme: "mlb",
        categories: ["sports"],
        sportsSport: "baseball",
        copyright: {
            title: "Major League Baseball is not owned by Ton-o-Lore.",
            body:
                "Major League Baseball, related names, marks, and materials are the property of MLB / respective clubs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "mlb": ["Major League Baseball"]
    },
    parents: {}
});
