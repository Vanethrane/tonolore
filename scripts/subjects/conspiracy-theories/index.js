/**
 * Conspiracy theories — Unexplained subject package.
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
        id: "conspiracy-theories",
        name: "Conspiracy theories",
        rootSlug: "conspiracy-theories",
        theme: "conspiracy-theories",
        categories: ["unexplained"],
        copyright: {
            title: "Conspiracy theories is not owned by Ton-o-Lore.",
            body:
                "Conspiracy theories, related names, marks, and materials are the property of Public discourse and historical record / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "conspiracy-theories": ["Conspiracy theories"]
    },
    parents: {}
});
