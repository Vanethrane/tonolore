/**
 * Holy Roman Emperors — Royalty & thrones subject package.
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
        id: "holy-roman-emperors",
        name: "Holy Roman Emperors",
        rootSlug: "holy-roman-emperors",
        theme: "holy-roman-emperors",
        categories: ["royalty"],
        copyright: {
            title: "Holy Roman Emperors is not owned by Ton-o-Lore.",
            body:
                "Holy Roman Emperors, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "holy-roman-emperors": ["Holy Roman Emperors"]
    },
    parents: {}
});
