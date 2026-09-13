/**
 * Entomology — Science & nature subject package.
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
        id: "entomology-insects",
        name: "Entomology",
        rootSlug: "entomology-insects",
        theme: "entomology-insects",
        categories: ["science-nature"],
        copyright: {
            title: "Entomology is not owned by Ton-o-Lore.",
            body:
                "Entomology, related names, marks, and materials are the property of Public scientific record / respective institutions and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "entomology-insects": ["Entomology"]
    },
    parents: {}
});
