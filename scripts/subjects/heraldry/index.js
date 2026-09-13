/**
 * Heraldry & coats of arms — Royalty & thrones subject package.
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
        id: "heraldry",
        name: "Heraldry & coats of arms",
        rootSlug: "heraldry",
        theme: "heraldry",
        categories: ["royalty"],
        copyright: {
            title: "Heraldry & coats of arms is not owned by Ton-o-Lore.",
            body:
                "Heraldry & coats of arms, related names, marks, and materials are the property of Public historical heraldic record / respective colleges and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "heraldry": ["Heraldry & coats of arms"]
    },
    parents: {}
});
