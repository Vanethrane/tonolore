/**
 * Steins;Gate — Anime subject package.
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
        id: "steins-gate",
        name: "Steins;Gate",
        rootSlug: "steins-gate",
        theme: "steins-gate",
        categories: ["anime"],
        copyright: {
            title: "Steins;Gate is not owned by Ton-o-Lore.",
            body:
                "Steins;Gate, related names, marks, and materials are the property of 5pb. / White Fox / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "steins-gate": ["Steins;Gate"]
    },
    parents: {}
});
