/**
 * Matchbox — Toys & collectibles subject package.
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
        id: "matchbox-cars",
        name: "Matchbox",
        rootSlug: "matchbox-cars",
        theme: "matchbox-cars",
        categories: ["toys"],
        copyright: {
            title: "Matchbox is not owned by Ton-o-Lore.",
            body:
                "Matchbox, related names, marks, and materials are the property of Mattel / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "matchbox-cars": ["Matchbox"]
    },
    parents: {}
});
