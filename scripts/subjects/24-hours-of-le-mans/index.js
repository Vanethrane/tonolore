/**
 * 24 Hours of Le Mans — Motorsport subject package.
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
        id: "24-hours-of-le-mans",
        name: "24 Hours of Le Mans",
        rootSlug: "24-hours-of-le-mans",
        theme: "24-hours-of-le-mans",
        categories: ["sports"],
        sportsSport: "motorsport",
        copyright: {
            title: "24 Hours of Le Mans is not owned by Ton-o-Lore.",
            body:
                "24 Hours of Le Mans, related names, marks, and materials are the property of ACO / FIA WEC / respective manufacturers and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "24-hours-of-le-mans": ["24 Hours of Le Mans"]
    },
    parents: {}
});
