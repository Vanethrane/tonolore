/**
 * Public housing history — Built environment subject package.
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
        id: "public-housing-history",
        name: "Public housing history",
        rootSlug: "public-housing-history",
        theme: "public-housing-history",
        categories: ["built-environment"],
        copyright: {
            title: "Public housing history is not owned by Ton-o-Lore.",
            body:
                "Public housing history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "public-housing-history": ["Public housing history"]
    },
    parents: {}
});
