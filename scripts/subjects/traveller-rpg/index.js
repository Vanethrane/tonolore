/**
 * Traveller — Tabletop subject package.
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
        id: "traveller-rpg",
        name: "Traveller",
        rootSlug: "traveller-rpg",
        theme: "traveller-rpg",
        categories: ["tabletop"],
        copyright: {
            title: "Traveller is not owned by Ton-o-Lore.",
            body:
                "Traveller, related names, marks, and materials are the property of Mongoose / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "traveller-rpg": ["Traveller"]
    },
    parents: {}
});
