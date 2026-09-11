/**
 * Digimon Card Game subject package.
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
        id: "digimon-card-game",
        name: "Digimon Card Game",
        rootSlug: "digimon-card-game",
        theme: "digimon-card-game",
        categories: ["card-games"],
        copyright: {
            title: "Digimon Card Game is not owned by Ton-o-Lore.",
            body:
                "Digimon Card Game, related names, logos, and game materials are the property of Bandai / Toei / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "digimon-card-game": ["Digimon Card Game"]
    },
    parents: {}
});
