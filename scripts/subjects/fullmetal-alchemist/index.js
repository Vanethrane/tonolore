/**
 * Fullmetal Alchemist — Anime subject package.
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
        id: "fullmetal-alchemist",
        name: "Fullmetal Alchemist",
        rootSlug: "fullmetal-alchemist",
        theme: "fullmetal-alchemist",
        categories: ["anime"],
        copyright: {
            title: "Fullmetal Alchemist is not owned by Ton-o-Lore.",
            body:
                "Fullmetal Alchemist, related names, marks, and materials are the property of Square Enix / Bones / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "fullmetal-alchemist": ["Fullmetal Alchemist"]
    },
    parents: {}
});
