/**
 * Mortal Kombat — Fighting games subject package.
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
        id: "mortal-kombat",
        name: "Mortal Kombat",
        rootSlug: "mortal-kombat",
        theme: "mortal-kombat",
        categories: ["fighting-games"],
        copyright: {
            title: "Mortal Kombat is not owned by Ton-o-Lore.",
            body:
                "Mortal Kombat, related names, marks, and materials are the property of NetherRealm / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "mortal-kombat": ["Mortal Kombat"]
    },
    parents: {}
});
