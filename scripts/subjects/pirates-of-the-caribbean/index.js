/**
 * Pirates of the Caribbean — Movies subject package.
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
        id: "pirates-of-the-caribbean",
        name: "Pirates of the Caribbean",
        rootSlug: "pirates-of-the-caribbean",
        theme: "pirates-of-the-caribbean",
        categories: ["movies"],
        copyright: {
            title: "Pirates of the Caribbean is not owned by Ton-o-Lore.",
            body:
                "Pirates of the Caribbean, related names, marks, and materials are the property of Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "pirates-of-the-caribbean": ["Pirates of the Caribbean"]
    },
    parents: {}
});
