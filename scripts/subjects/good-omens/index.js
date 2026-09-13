/**
 * Good Omens — Books & literature subject package.
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
        id: "good-omens",
        name: "Good Omens",
        rootSlug: "good-omens",
        theme: "good-omens",
        categories: ["books"],
        copyright: {
            title: "Good Omens is not owned by Ton-o-Lore.",
            body:
                "Good Omens, related names, marks, and materials are the property of Pratchett & Gaiman estates / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "good-omens": ["Good Omens"]
    },
    parents: {}
});
