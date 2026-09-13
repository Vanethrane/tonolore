/**
 * Dungeons & Daddies — Podcasts & audio subject package.
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
        id: "dungeons-and-daddies",
        name: "Dungeons & Daddies",
        rootSlug: "dungeons-and-daddies",
        theme: "dungeons-and-daddies",
        categories: ["podcasts"],
        copyright: {
            title: "Dungeons & Daddies is not owned by Ton-o-Lore.",
            body:
                "Dungeons & Daddies, related names, marks, and materials are the property of Dungeons & Daddies / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dungeons-and-daddies": ["Dungeons & Daddies"]
    },
    parents: {}
});
