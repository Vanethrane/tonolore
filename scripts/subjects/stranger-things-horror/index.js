/**
 * Stranger Things — Horror subject package.
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
        id: "stranger-things-horror",
        name: "Stranger Things",
        rootSlug: "stranger-things-horror",
        theme: "stranger-things-horror",
        categories: ["horror"],
        copyright: {
            title: "Stranger Things is not owned by Ton-o-Lore.",
            body:
                "Stranger Things, related names, marks, and materials are the property of Netflix / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "stranger-things-horror": ["Stranger Things"]
    },
    parents: {}
});
