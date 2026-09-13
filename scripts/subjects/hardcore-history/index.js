/**
 * Hardcore History — Podcasts & audio subject package.
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
        id: "hardcore-history",
        name: "Hardcore History",
        rootSlug: "hardcore-history",
        theme: "hardcore-history",
        categories: ["podcasts"],
        copyright: {
            title: "Hardcore History is not owned by Ton-o-Lore.",
            body:
                "Hardcore History, related names, marks, and materials are the property of Dan Carlin / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "hardcore-history": ["Hardcore History"]
    },
    parents: {}
});
