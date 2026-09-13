/**
 * Ju-On / The Grudge — Horror subject package.
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
        id: "ju-on-grudge",
        name: "Ju-On / The Grudge",
        rootSlug: "ju-on-grudge",
        theme: "ju-on-grudge",
        categories: ["horror"],
        copyright: {
            title: "Ju-On / The Grudge is not owned by Ton-o-Lore.",
            body:
                "Ju-On / The Grudge, related names, marks, and materials are the property of Toei / Sony / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ju-on-grudge": ["Ju-On / The Grudge"]
    },
    parents: {}
});
