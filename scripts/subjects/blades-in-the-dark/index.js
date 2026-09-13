/**
 * Blades in the Dark — Tabletop subject package.
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
        id: "blades-in-the-dark",
        name: "Blades in the Dark",
        rootSlug: "blades-in-the-dark",
        theme: "blades-in-the-dark",
        categories: ["tabletop"],
        copyright: {
            title: "Blades in the Dark is not owned by Ton-o-Lore.",
            body:
                "Blades in the Dark, related names, marks, and materials are the property of Evil Hat / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "blades-in-the-dark": ["Blades in the Dark"]
    },
    parents: {}
});
