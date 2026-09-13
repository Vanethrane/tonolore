/**
 * Rideshare era — Transport & machines subject package.
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
        id: "rideshare-era",
        name: "Rideshare era",
        rootSlug: "rideshare-era",
        theme: "rideshare-era",
        categories: ["transport"],
        copyright: {
            title: "Rideshare era is not owned by Ton-o-Lore.",
            body:
                "Rideshare era, related names, marks, and materials are the property of Public tech history / respective companies. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "rideshare-era": ["Rideshare era"]
    },
    parents: {}
});
