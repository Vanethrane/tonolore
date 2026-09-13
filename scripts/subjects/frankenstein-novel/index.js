/**
 * Frankenstein — Books & literature subject package.
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
        id: "frankenstein-novel",
        name: "Frankenstein",
        rootSlug: "frankenstein-novel",
        theme: "frankenstein-novel",
        categories: ["books"],
        copyright: {
            title: "Frankenstein is not owned by Ton-o-Lore.",
            body:
                "Frankenstein, related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "frankenstein-novel": ["Frankenstein"]
    },
    parents: {}
});
