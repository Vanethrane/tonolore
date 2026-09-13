/**
 * Neon Genesis Evangelion — Anime subject package.
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
        id: "neon-genesis-evangelion",
        name: "Neon Genesis Evangelion",
        rootSlug: "neon-genesis-evangelion",
        theme: "neon-genesis-evangelion",
        categories: ["anime"],
        copyright: {
            title: "Neon Genesis Evangelion is not owned by Ton-o-Lore.",
            body:
                "Neon Genesis Evangelion, related names, marks, and materials are the property of Khara / Gainax / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "neon-genesis-evangelion": ["Neon Genesis Evangelion"]
    },
    parents: {}
});
