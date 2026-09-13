/**
 * Mutants & Masterminds — Tabletop subject package.
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
        id: "mutants-and-masterminds",
        name: "Mutants & Masterminds",
        rootSlug: "mutants-and-masterminds",
        theme: "mutants-and-masterminds",
        categories: ["tabletop"],
        copyright: {
            title: "Mutants & Masterminds is not owned by Ton-o-Lore.",
            body:
                "Mutants & Masterminds, related names, marks, and materials are the property of Green Ronin / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "mutants-and-masterminds": ["Mutants & Masterminds"]
    },
    parents: {}
});
