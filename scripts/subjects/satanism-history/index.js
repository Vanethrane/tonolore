/**
 * Satanism history — Occult & esoterica subject package.
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
        id: "satanism-history",
        name: "Satanism history",
        rootSlug: "satanism-history",
        theme: "satanism-history",
        categories: ["occult"],
        copyright: {
            title: "Satanism history is not owned by Ton-o-Lore.",
            body:
                "Satanism history, related names, marks, and materials are the property of Public religious/cultural history / respective groups. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "satanism-history": ["Satanism history"]
    },
    parents: {}
});
