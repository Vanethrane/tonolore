/**
 * Arcane — Western animation subject package.
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
        id: "arcane-league",
        name: "Arcane",
        rootSlug: "arcane-league",
        theme: "arcane-league",
        categories: ["western-animation"],
        copyright: {
            title: "Arcane is not owned by Ton-o-Lore.",
            body:
                "Arcane, related names, marks, and materials are the property of Riot / Netflix / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "arcane-league": ["Arcane"]
    },
    parents: {}
});
