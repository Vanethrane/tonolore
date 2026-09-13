/**
 * The Office (US) — Television subject package.
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
        id: "the-office-us",
        name: "The Office (US)",
        rootSlug: "the-office-us",
        theme: "the-office-us",
        categories: ["television"],
        copyright: {
            title: "The Office (US) is not owned by Ton-o-Lore.",
            body:
                "The Office (US), related names, marks, and materials are the property of NBCUniversal / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-office-us": ["The Office (US)"]
    },
    parents: {}
});
