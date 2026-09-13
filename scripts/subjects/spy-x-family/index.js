/**
 * Spy x Family — Anime subject package.
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
        id: "spy-x-family",
        name: "Spy x Family",
        rootSlug: "spy-x-family",
        theme: "spy-x-family",
        categories: ["anime"],
        copyright: {
            title: "Spy x Family is not owned by Ton-o-Lore.",
            body:
                "Spy x Family, related names, marks, and materials are the property of Shueisha / Wit / CloverWorks / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "spy-x-family": ["Spy x Family"]
    },
    parents: {}
});
