/**
 * Tokyo Ghoul — Anime subject package.
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
        id: "tokyo-ghoul",
        name: "Tokyo Ghoul",
        rootSlug: "tokyo-ghoul",
        theme: "tokyo-ghoul",
        categories: ["anime"],
        copyright: {
            title: "Tokyo Ghoul is not owned by Ton-o-Lore.",
            body:
                "Tokyo Ghoul, related names, marks, and materials are the property of Shueisha / Pierrot / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "tokyo-ghoul": ["Tokyo Ghoul"]
    },
    parents: {}
});
