/**
 * Spanish monarchy — Royalty & thrones subject package.
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
        id: "spanish-monarchy",
        name: "Spanish monarchy",
        rootSlug: "spanish-monarchy",
        theme: "spanish-monarchy",
        categories: ["royalty"],
        copyright: {
            title: "Spanish monarchy is not owned by Ton-o-Lore.",
            body:
                "Spanish monarchy, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "spanish-monarchy": ["Spanish monarchy"]
    },
    parents: {}
});
