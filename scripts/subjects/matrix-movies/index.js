/**
 * The Matrix (movies) — Movies subject package.
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
        id: "matrix-movies",
        name: "The Matrix (movies)",
        rootSlug: "matrix-movies",
        theme: "matrix-movies",
        categories: ["movies"],
        copyright: {
            title: "The Matrix (movies) is not owned by Ton-o-Lore.",
            body:
                "The Matrix (movies), related names, marks, and materials are the property of Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "matrix-movies": ["The Matrix (movies)"]
    },
    parents: {}
});
