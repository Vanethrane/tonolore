/**
 * Kickboxing — Combat sports subject package.
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
        id: "kickboxing",
        name: "Kickboxing",
        rootSlug: "kickboxing",
        theme: "kickboxing",
        categories: ["sports"],
        sportsSport: "combat-sports",
        copyright: {
            title: "Kickboxing is not owned by Ton-o-Lore.",
            body:
                "Kickboxing, related names, marks, and materials are the property of Respective promotions, federations, and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "kickboxing": ["Kickboxing"]
    },
    parents: {}
});
