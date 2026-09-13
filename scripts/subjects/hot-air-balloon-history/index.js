/**
 * Hot air balloon history — Transport & machines subject package.
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
        id: "hot-air-balloon-history",
        name: "Hot air balloon history",
        rootSlug: "hot-air-balloon-history",
        theme: "hot-air-balloon-history",
        categories: ["transport"],
        copyright: {
            title: "Hot air balloon history is not owned by Ton-o-Lore.",
            body:
                "Hot air balloon history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "hot-air-balloon-history": ["Hot air balloon history"]
    },
    parents: {}
});
