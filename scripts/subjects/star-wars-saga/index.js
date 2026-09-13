/**
 * Star Wars saga (films) — Movies subject package.
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
        id: "star-wars-saga",
        name: "Star Wars saga (films)",
        rootSlug: "star-wars-saga",
        theme: "star-wars-saga",
        categories: ["movies"],
        copyright: {
            title: "Star Wars saga (films) is not owned by Ton-o-Lore.",
            body:
                "Star Wars saga (films), related names, marks, and materials are the property of Lucasfilm / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "star-wars-saga": ["Star Wars saga (films)"]
    },
    parents: {}
});
