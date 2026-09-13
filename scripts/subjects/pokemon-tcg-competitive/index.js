/**
 * Pokémon TCG competitive eras — Card games subject package.
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
        id: "pokemon-tcg-competitive",
        name: "Pokémon TCG competitive eras",
        rootSlug: "pokemon-tcg-competitive",
        theme: "pokemon-tcg-competitive",
        categories: ["card-games"],
        copyright: {
            title: "Pokémon TCG competitive eras is not owned by Ton-o-Lore.",
            body:
                "Pokémon TCG competitive eras, related names, marks, and materials are the property of The Pokémon Company / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "pokemon-tcg-competitive": ["Pokémon TCG competitive eras"]
    },
    parents: {}
});
