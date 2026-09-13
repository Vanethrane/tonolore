/**
 * Mob Psycho 100 — Anime subject package.
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
        id: "mob-psycho-100",
        name: "Mob Psycho 100",
        rootSlug: "mob-psycho-100",
        theme: "mob-psycho-100",
        categories: ["anime"],
        copyright: {
            title: "Mob Psycho 100 is not owned by Ton-o-Lore.",
            body:
                "Mob Psycho 100, related names, marks, and materials are the property of Shogakukan / Bones / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "mob-psycho-100": ["Mob Psycho 100"]
    },
    parents: {}
});
