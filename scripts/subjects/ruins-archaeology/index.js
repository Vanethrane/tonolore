/**
 * Ruins & archaeological sites — Built environment subject package.
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
        id: "ruins-archaeology",
        name: "Ruins & archaeological sites",
        rootSlug: "ruins-archaeology",
        theme: "ruins-archaeology",
        categories: ["built-environment"],
        copyright: {
            title: "Ruins & archaeological sites is not owned by Ton-o-Lore.",
            body:
                "Ruins & archaeological sites, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ruins-archaeology": ["Ruins & archaeological sites"]
    },
    parents: {}
});
