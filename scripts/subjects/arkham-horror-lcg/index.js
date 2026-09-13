/**
 * Arkham Horror: The Card Game — Card games subject package.
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
        id: "arkham-horror-lcg",
        name: "Arkham Horror: The Card Game",
        rootSlug: "arkham-horror-lcg",
        theme: "arkham-horror-lcg",
        categories: ["card-games"],
        copyright: {
            title: "Arkham Horror: The Card Game is not owned by Ton-o-Lore.",
            body:
                "Arkham Horror: The Card Game, related names, marks, and materials are the property of Fantasy Flight / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "arkham-horror-lcg": ["Arkham Horror: The Card Game"]
    },
    parents: {}
});
