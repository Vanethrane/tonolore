/**
 * The Daily — Podcasts & audio subject package.
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
        id: "the-daily-podcast",
        name: "The Daily",
        rootSlug: "the-daily-podcast",
        theme: "the-daily-podcast",
        categories: ["podcasts"],
        copyright: {
            title: "The Daily is not owned by Ton-o-Lore.",
            body:
                "The Daily, related names, marks, and materials are the property of The New York Times / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-daily-podcast": ["The Daily"]
    },
    parents: {}
});
