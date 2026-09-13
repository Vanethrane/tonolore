/**
 * Predator — Science fiction subject package.
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
        id: "predator-franchise",
        name: "Predator",
        rootSlug: "predator-franchise",
        theme: "predator-franchise",
        categories: ["sci-fi"],
        copyright: {
            title: "Predator is not owned by Ton-o-Lore.",
            body:
                "Predator, related names, marks, and materials are the property of 20th Century / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "predator-franchise": ["Predator"]
    },
    parents: {}
});
