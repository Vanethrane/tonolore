/**
 * Sorcery: Contested Realm — Card games subject package.
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
        id: "sorcery-contested-realm",
        name: "Sorcery: Contested Realm",
        rootSlug: "sorcery-contested-realm",
        theme: "sorcery-contested-realm",
        categories: ["card-games"],
        copyright: {
            title: "Sorcery: Contested Realm is not owned by Ton-o-Lore.",
            body:
                "Sorcery: Contested Realm, related names, marks, and materials are the property of Erik's Curiosa / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "sorcery-contested-realm": ["Sorcery: Contested Realm"]
    },
    parents: {}
});
