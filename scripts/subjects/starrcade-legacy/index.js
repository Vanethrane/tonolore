/**
 * Starrcade — Pro wrestling subject package.
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
        id: "starrcade-legacy",
        name: "Starrcade",
        rootSlug: "starrcade-legacy",
        theme: "starrcade-legacy",
        categories: ["wrestling"],
        copyright: {
            title: "Starrcade is not owned by Ton-o-Lore.",
            body:
                "Starrcade, related names, marks, and materials are the property of WWE / NWA legacy / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "starrcade-legacy": ["Starrcade"]
    },
    parents: {}
});
