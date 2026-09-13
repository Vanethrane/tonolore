/**
 * Crystal healing lore — Occult & esoterica subject package.
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
        id: "crystal-healing-lore",
        name: "Crystal healing lore",
        rootSlug: "crystal-healing-lore",
        theme: "crystal-healing-lore",
        categories: ["occult"],
        copyright: {
            title: "Crystal healing lore is not owned by Ton-o-Lore.",
            body:
                "Crystal healing lore, related names, marks, and materials are the property of Public New Age culture / respective sellers. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "crystal-healing-lore": ["Crystal healing lore"]
    },
    parents: {}
});
