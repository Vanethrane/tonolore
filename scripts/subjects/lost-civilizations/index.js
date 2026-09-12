/**
 * Lost civilizations — Unexplained subject package.
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
        id: "lost-civilizations",
        name: "Lost civilizations",
        rootSlug: "lost-civilizations",
        theme: "lost-civilizations",
        categories: ["unexplained"],
        copyright: {
            title: "Lost civilizations is not owned by Ton-o-Lore.",
            body:
                "Lost civilizations, related names, marks, and materials are the property of Public historical and archaeological record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "lost-civilizations": ["Lost civilizations"]
    },
    parents: {}
});
