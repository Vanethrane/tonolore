/**
 * Re:Zero — Anime subject package.
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
        id: "re-zero",
        name: "Re:Zero",
        rootSlug: "re-zero",
        theme: "re-zero",
        categories: ["anime"],
        copyright: {
            title: "Re:Zero is not owned by Ton-o-Lore.",
            body:
                "Re:Zero, related names, marks, and materials are the property of Kadokawa / White Fox / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "re-zero": ["Re:Zero"]
    },
    parents: {}
});
