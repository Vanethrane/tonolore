/**
 * The Mafia — Crime & underworld subject package.
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
        id: "the-mafia",
        name: "The Mafia",
        rootSlug: "the-mafia",
        theme: "the-mafia",
        categories: ["crime"],
        copyright: {
            title: "The Mafia is not owned by Ton-o-Lore.",
            body:
                "The Mafia, related names, marks, and materials are the property of Public historical and legal record / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-mafia": ["The Mafia"]
    },
    parents: {}
});
