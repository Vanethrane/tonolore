/**
 * 7th Sea — Tabletop subject package.
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
        id: "7th-sea",
        name: "7th Sea",
        rootSlug: "7th-sea",
        theme: "7th-sea",
        categories: ["tabletop"],
        copyright: {
            title: "7th Sea is not owned by Ton-o-Lore.",
            body:
                "7th Sea, related names, marks, and materials are the property of Chaosium / John Wick / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "7th-sea": ["7th Sea"]
    },
    parents: {}
});
