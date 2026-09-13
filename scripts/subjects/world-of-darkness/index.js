/**
 * World of Darkness — Tabletop subject package.
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
        id: "world-of-darkness",
        name: "World of Darkness",
        rootSlug: "world-of-darkness",
        theme: "world-of-darkness",
        categories: ["tabletop"],
        copyright: {
            title: "World of Darkness is not owned by Ton-o-Lore.",
            body:
                "World of Darkness, related names, marks, and materials are the property of Paradox / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "world-of-darkness": ["World of Darkness"]
    },
    parents: {}
});
