/**
 * Persona 4 Arena — Fighting games subject package.
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
        id: "persona-arena",
        name: "Persona 4 Arena",
        rootSlug: "persona-arena",
        theme: "persona-arena",
        categories: ["fighting-games"],
        copyright: {
            title: "Persona 4 Arena is not owned by Ton-o-Lore.",
            body:
                "Persona 4 Arena, related names, marks, and materials are the property of Atlus / Arc System Works / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "persona-arena": ["Persona 4 Arena"]
    },
    parents: {}
});
