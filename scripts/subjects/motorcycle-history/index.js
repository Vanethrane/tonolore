/**
 * Motorcycle history — Transport & machines subject package.
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
        id: "motorcycle-history",
        name: "Motorcycle history",
        rootSlug: "motorcycle-history",
        theme: "motorcycle-history",
        categories: ["transport"],
        copyright: {
            title: "Motorcycle history is not owned by Ton-o-Lore.",
            body:
                "Motorcycle history, related names, marks, and materials are the property of Public industrial history / respective manufacturers and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "motorcycle-history": ["Motorcycle history"]
    },
    parents: {}
});
