/**
 * This American Life — Podcasts & audio subject package.
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
        id: "this-american-life",
        name: "This American Life",
        rootSlug: "this-american-life",
        theme: "this-american-life",
        categories: ["podcasts"],
        copyright: {
            title: "This American Life is not owned by Ton-o-Lore.",
            body:
                "This American Life, related names, marks, and materials are the property of This American Life / WBEZ / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "this-american-life": ["This American Life"]
    },
    parents: {}
});
