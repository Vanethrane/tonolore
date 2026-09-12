/**
 * Royal families — Royalty & thrones subject package.
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
        id: "royal-families",
        name: "Royal families",
        rootSlug: "royal-families",
        theme: "royal-families",
        categories: ["royalty"],
        copyright: {
            title: "Royal families is not owned by Ton-o-Lore.",
            body:
                "Royal families, related names, marks, and materials are the property of Public historical record / respective houses and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "royal-families": ["Royal families"]
    },
    parents: {}
});
