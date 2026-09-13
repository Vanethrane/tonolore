/**
 * Farscape — Science fiction subject package.
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
        id: "farscape",
        name: "Farscape",
        rootSlug: "farscape",
        theme: "farscape",
        categories: ["sci-fi"],
        copyright: {
            title: "Farscape is not owned by Ton-o-Lore.",
            body:
                "Farscape, related names, marks, and materials are the property of Jim Henson / NBCUniversal / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "farscape": ["Farscape"]
    },
    parents: {}
});
