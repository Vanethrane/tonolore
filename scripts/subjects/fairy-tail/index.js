/**
 * Fairy Tail — Anime subject package.
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
        id: "fairy-tail",
        name: "Fairy Tail",
        rootSlug: "fairy-tail",
        theme: "fairy-tail",
        categories: ["anime"],
        copyright: {
            title: "Fairy Tail is not owned by Ton-o-Lore.",
            body:
                "Fairy Tail, related names, marks, and materials are the property of Kodansha / A-1 / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "fairy-tail": ["Fairy Tail"]
    },
    parents: {}
});
