/**
 * Wolf 359 — Podcasts & audio subject package.
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
        id: "wolf-359",
        name: "Wolf 359",
        rootSlug: "wolf-359",
        theme: "wolf-359",
        categories: ["podcasts"],
        copyright: {
            title: "Wolf 359 is not owned by Ton-o-Lore.",
            body:
                "Wolf 359, related names, marks, and materials are the property of Kinda Evil Genius / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "wolf-359": ["Wolf 359"]
    },
    parents: {}
});
