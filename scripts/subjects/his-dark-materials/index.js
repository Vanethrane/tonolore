/**
 * His Dark Materials — Books & literature subject package.
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
        id: "his-dark-materials",
        name: "His Dark Materials",
        rootSlug: "his-dark-materials",
        theme: "his-dark-materials",
        categories: ["books"],
        copyright: {
            title: "His Dark Materials is not owned by Ton-o-Lore.",
            body:
                "His Dark Materials, related names, marks, and materials are the property of Philip Pullman / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "his-dark-materials": ["His Dark Materials"]
    },
    parents: {}
});
