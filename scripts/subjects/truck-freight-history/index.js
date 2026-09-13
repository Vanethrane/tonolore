/**
 * Truck freight history — Transport & machines subject package.
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
        id: "truck-freight-history",
        name: "Truck freight history",
        rootSlug: "truck-freight-history",
        theme: "truck-freight-history",
        categories: ["transport"],
        copyright: {
            title: "Truck freight history is not owned by Ton-o-Lore.",
            body:
                "Truck freight history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "truck-freight-history": ["Truck freight history"]
    },
    parents: {}
});
