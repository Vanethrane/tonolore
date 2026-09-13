/**
 * Area 51 — Unexplained subject package.
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
        id: "area-51-lore",
        name: "Area 51",
        rootSlug: "area-51-lore",
        theme: "area-51-lore",
        categories: ["unexplained"],
        copyright: {
            title: "Area 51 is not owned by Ton-o-Lore.",
            body:
                "Area 51, related names, marks, and materials are the property of Public / declassified record / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "area-51-lore": ["Area 51"]
    },
    parents: {}
});
