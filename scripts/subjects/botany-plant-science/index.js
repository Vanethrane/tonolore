/**
 * Botany & plant science — Science & nature subject package.
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
        id: "botany-plant-science",
        name: "Botany & plant science",
        rootSlug: "botany-plant-science",
        theme: "botany-plant-science",
        categories: ["science-nature"],
        copyright: {
            title: "Botany & plant science is not owned by Ton-o-Lore.",
            body:
                "Botany & plant science, related names, marks, and materials are the property of Public scientific record / respective institutions and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "botany-plant-science": ["Botany & plant science"]
    },
    parents: {}
});
