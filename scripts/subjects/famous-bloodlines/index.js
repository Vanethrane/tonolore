/**
 * Genealogy & famous bloodlines — Royalty & thrones subject package.
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
        id: "famous-bloodlines",
        name: "Genealogy & famous bloodlines",
        rootSlug: "famous-bloodlines",
        theme: "famous-bloodlines",
        categories: ["royalty"],
        copyright: {
            title: "Genealogy & famous bloodlines is not owned by Ton-o-Lore.",
            body:
                "Genealogy & famous bloodlines, related names, marks, and materials are the property of Public historical and genealogical record / respective houses and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "famous-bloodlines": ["Genealogy & famous bloodlines"]
    },
    parents: {}
});
