/**
 * The Matrix — Science fiction subject package.
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
        id: "the-matrix",
        name: "The Matrix",
        rootSlug: "the-matrix",
        theme: "the-matrix",
        categories: ["sci-fi"],
        copyright: {
            title: "The Matrix is not owned by Ton-o-Lore.",
            body:
                "The Matrix, related names, marks, and materials are the property of Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-matrix": ["The Matrix"]
    },
    parents: {}
});
