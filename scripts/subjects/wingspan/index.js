/**
 * Wingspan subject package.
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
        id: "wingspan",
        name: "Wingspan",
        rootSlug: "wingspan",
        theme: "wingspan",
        categories: ["tabletop"],
        copyright: {
            title: "Wingspan is not owned by Ton-o-Lore.",
            body:
                "Wingspan, related names, logos, and game materials are the property of Stonemaier Games / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "wingspan": ["Wingspan"]
    },
    parents: {}
});
