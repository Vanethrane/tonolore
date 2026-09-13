/**
 * Cyberpunk Red / Cyberpunk RPG — Tabletop subject package.
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
        id: "cyberpunk-red",
        name: "Cyberpunk Red / Cyberpunk RPG",
        rootSlug: "cyberpunk-red",
        theme: "cyberpunk-red",
        categories: ["tabletop"],
        copyright: {
            title: "Cyberpunk Red / Cyberpunk RPG is not owned by Ton-o-Lore.",
            body:
                "Cyberpunk Red / Cyberpunk RPG, related names, marks, and materials are the property of R. Talsorian / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "cyberpunk-red": ["Cyberpunk Red / Cyberpunk RPG"]
    },
    parents: {}
});
