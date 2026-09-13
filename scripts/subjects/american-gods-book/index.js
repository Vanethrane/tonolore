/**
 * American Gods — Books & literature subject package.
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
        id: "american-gods-book",
        name: "American Gods",
        rootSlug: "american-gods-book",
        theme: "american-gods-book",
        categories: ["books"],
        copyright: {
            title: "American Gods is not owned by Ton-o-Lore.",
            body:
                "American Gods, related names, marks, and materials are the property of Gaiman / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "american-gods-book": ["American Gods"]
    },
    parents: {}
});
