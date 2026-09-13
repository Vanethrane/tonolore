/**
 * Streetcar & tram history — Transport & machines subject package.
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
        id: "streetcar-history",
        name: "Streetcar & tram history",
        rootSlug: "streetcar-history",
        theme: "streetcar-history",
        categories: ["transport"],
        copyright: {
            title: "Streetcar & tram history is not owned by Ton-o-Lore.",
            body:
                "Streetcar & tram history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "streetcar-history": ["Streetcar & tram history"]
    },
    parents: {}
});
