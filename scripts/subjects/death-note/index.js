/**
 * Death Note — Anime subject package.
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
        id: "death-note",
        name: "Death Note",
        rootSlug: "death-note",
        theme: "death-note",
        categories: ["anime"],
        copyright: {
            title: "Death Note is not owned by Ton-o-Lore.",
            body:
                "Death Note, related names, marks, and materials are the property of Shueisha / Madhouse / Viz / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "death-note": ["Death Note"]
    },
    parents: {}
});
