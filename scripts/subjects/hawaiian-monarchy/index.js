/**
 * Hawaiian monarchy — Royalty & thrones subject package.
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
        id: "hawaiian-monarchy",
        name: "Hawaiian monarchy",
        rootSlug: "hawaiian-monarchy",
        theme: "hawaiian-monarchy",
        categories: ["royalty"],
        copyright: {
            title: "Hawaiian monarchy is not owned by Ton-o-Lore.",
            body:
                "Hawaiian monarchy, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "hawaiian-monarchy": ["Hawaiian monarchy"]
    },
    parents: {}
});
