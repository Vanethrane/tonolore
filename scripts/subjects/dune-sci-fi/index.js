/**
 * Dune (sci-fi shelf) — Science fiction subject package.
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
        id: "dune-sci-fi",
        name: "Dune (sci-fi shelf)",
        rootSlug: "dune-sci-fi",
        theme: "dune-sci-fi",
        categories: ["sci-fi"],
        copyright: {
            title: "Dune (sci-fi shelf) is not owned by Ton-o-Lore.",
            body:
                "Dune (sci-fi shelf), related names, marks, and materials are the property of Herbert estate / Legendary / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dune-sci-fi": ["Dune (sci-fi shelf)"]
    },
    parents: {}
});
