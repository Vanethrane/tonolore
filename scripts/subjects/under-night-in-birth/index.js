/**
 * Under Night In-Birth — Fighting games subject package.
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
        id: "under-night-in-birth",
        name: "Under Night In-Birth",
        rootSlug: "under-night-in-birth",
        theme: "under-night-in-birth",
        categories: ["fighting-games"],
        copyright: {
            title: "Under Night In-Birth is not owned by Ton-o-Lore.",
            body:
                "Under Night In-Birth, related names, marks, and materials are the property of French Bread / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "under-night-in-birth": ["Under Night In-Birth"]
    },
    parents: {}
});
