/**
 * Dinosaurs — Science & nature subject package.
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
        id: "dinosaurs",
        name: "Dinosaurs",
        rootSlug: "dinosaurs",
        theme: "dinosaurs",
        categories: ["science-nature"],
        copyright: {
            title: "Dinosaurs is not owned by Ton-o-Lore.",
            body:
                "Dinosaurs, related names, marks, and materials are the property of Public-domain paleontology / respective museums and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dinosaurs": ["Dinosaurs"]
    },
    parents: {}
});
