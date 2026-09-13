/**
 * Cartography & maps — Science & nature subject package.
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
        id: "cartography-maps",
        name: "Cartography & maps",
        rootSlug: "cartography-maps",
        theme: "cartography-maps",
        categories: ["science-nature"],
        copyright: {
            title: "Cartography & maps is not owned by Ton-o-Lore.",
            body:
                "Cartography & maps, related names, marks, and materials are the property of Public scientific record / respective institutions and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "cartography-maps": ["Cartography & maps"]
    },
    parents: {}
});
