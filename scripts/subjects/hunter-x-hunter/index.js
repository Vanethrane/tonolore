/**
 * Hunter x Hunter — Anime subject package.
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
        id: "hunter-x-hunter",
        name: "Hunter x Hunter",
        rootSlug: "hunter-x-hunter",
        theme: "hunter-x-hunter",
        categories: ["anime"],
        copyright: {
            title: "Hunter x Hunter is not owned by Ton-o-Lore.",
            body:
                "Hunter x Hunter, related names, marks, and materials are the property of Shueisha / Madhouse / Viz / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "hunter-x-hunter": ["Hunter x Hunter"]
    },
    parents: {}
});
