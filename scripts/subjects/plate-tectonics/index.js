/**
 * Plate tectonics — Science & nature subject package.
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
        id: "plate-tectonics",
        name: "Plate tectonics",
        rootSlug: "plate-tectonics",
        theme: "plate-tectonics",
        categories: ["science-nature"],
        copyright: {
            title: "Plate tectonics is not owned by Ton-o-Lore.",
            body:
                "Plate tectonics, related names, marks, and materials are the property of Public scientific record / respective institutions and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "plate-tectonics": ["Plate tectonics"]
    },
    parents: {}
});
