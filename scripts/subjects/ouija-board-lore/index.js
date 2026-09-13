/**
 * Ouija board lore — Occult & esoterica subject package.
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
        id: "ouija-board-lore",
        name: "Ouija board lore",
        rootSlug: "ouija-board-lore",
        theme: "ouija-board-lore",
        categories: ["occult"],
        copyright: {
            title: "Ouija board lore is not owned by Ton-o-Lore.",
            body:
                "Ouija board lore, related names, marks, and materials are the property of Hasbro / public folklore / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ouija-board-lore": ["Ouija board lore"]
    },
    parents: {}
});
