/**
 * Stuff You Should Know — Podcasts & audio subject package.
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
        id: "stuff-you-should-know",
        name: "Stuff You Should Know",
        rootSlug: "stuff-you-should-know",
        theme: "stuff-you-should-know",
        categories: ["podcasts"],
        copyright: {
            title: "Stuff You Should Know is not owned by Ton-o-Lore.",
            body:
                "Stuff You Should Know, related names, marks, and materials are the property of iHeart / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "stuff-you-should-know": ["Stuff You Should Know"]
    },
    parents: {}
});
