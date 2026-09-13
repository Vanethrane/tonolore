/**
 * Persona — Video games subject package.
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
        id: "persona-series",
        name: "Persona",
        rootSlug: "persona-series",
        theme: "persona-series",
        categories: ["video-games"],
        copyright: {
            title: "Persona is not owned by Ton-o-Lore.",
            body:
                "Persona, related names, marks, and materials are the property of Atlus / Sega / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "persona-series": ["Persona"]
    },
    parents: {}
});
