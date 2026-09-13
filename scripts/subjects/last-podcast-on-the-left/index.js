/**
 * Last Podcast on the Left — Podcasts & audio subject package.
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
        id: "last-podcast-on-the-left",
        name: "Last Podcast on the Left",
        rootSlug: "last-podcast-on-the-left",
        theme: "last-podcast-on-the-left",
        categories: ["podcasts"],
        copyright: {
            title: "Last Podcast on the Left is not owned by Ton-o-Lore.",
            body:
                "Last Podcast on the Left, related names, marks, and materials are the property of The Last Podcast Network / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "last-podcast-on-the-left": ["Last Podcast on the Left"]
    },
    parents: {}
});
