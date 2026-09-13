/**
 * Les Misérables (musical) — Theater & musicals subject package.
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
        id: "les-miserables-musical",
        name: "Les Misérables (musical)",
        rootSlug: "les-miserables-musical",
        theme: "les-miserables-musical",
        categories: ["theater"],
        copyright: {
            title: "Les Misérables (musical) is not owned by Ton-o-Lore.",
            body:
                "Les Misérables (musical), related names, marks, and materials are the property of Cameron Mackintosh / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "les-miserables-musical": ["Les Misérables (musical)"]
    },
    parents: {}
});
