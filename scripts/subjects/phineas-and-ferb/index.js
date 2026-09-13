/**
 * Phineas and Ferb — Western animation subject package.
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
        id: "phineas-and-ferb",
        name: "Phineas and Ferb",
        rootSlug: "phineas-and-ferb",
        theme: "phineas-and-ferb",
        categories: ["western-animation"],
        copyright: {
            title: "Phineas and Ferb is not owned by Ton-o-Lore.",
            body:
                "Phineas and Ferb, related names, marks, and materials are the property of Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "phineas-and-ferb": ["Phineas and Ferb"]
    },
    parents: {}
});
