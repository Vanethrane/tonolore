/**
 * Catch-22 — Books & literature subject package.
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
        id: "catch-22-novel",
        name: "Catch-22",
        rootSlug: "catch-22-novel",
        theme: "catch-22-novel",
        categories: ["books"],
        copyright: {
            title: "Catch-22 is not owned by Ton-o-Lore.",
            body:
                "Catch-22, related names, marks, and materials are the property of Heller estate / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "catch-22-novel": ["Catch-22"]
    },
    parents: {}
});
