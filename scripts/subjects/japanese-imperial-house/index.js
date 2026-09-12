/**
 * Japanese imperial house — Royalty & thrones subject package.
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
        id: "japanese-imperial-house",
        name: "Japanese imperial house",
        rootSlug: "japanese-imperial-house",
        theme: "japanese-imperial-house",
        categories: ["royalty"],
        copyright: {
            title: "Japanese imperial house is not owned by Ton-o-Lore.",
            body:
                "Japanese imperial house, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "japanese-imperial-house": ["Japanese imperial house"]
    },
    parents: {}
});
