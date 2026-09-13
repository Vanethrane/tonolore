/**
 * One-Punch Man — Anime subject package.
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
        id: "one-punch-man",
        name: "One-Punch Man",
        rootSlug: "one-punch-man",
        theme: "one-punch-man",
        categories: ["anime"],
        copyright: {
            title: "One-Punch Man is not owned by Ton-o-Lore.",
            body:
                "One-Punch Man, related names, marks, and materials are the property of Shueisha / Madhouse / Bones / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "one-punch-man": ["One-Punch Man"]
    },
    parents: {}
});
