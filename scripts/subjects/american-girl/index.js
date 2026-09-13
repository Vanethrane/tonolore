/**
 * American Girl — Toys & collectibles subject package.
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
        id: "american-girl",
        name: "American Girl",
        rootSlug: "american-girl",
        theme: "american-girl",
        categories: ["toys"],
        copyright: {
            title: "American Girl is not owned by Ton-o-Lore.",
            body:
                "American Girl, related names, marks, and materials are the property of Mattel / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "american-girl": ["American Girl"]
    },
    parents: {}
});
