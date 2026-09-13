/**
 * The Hobbit — Books & literature subject package.
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
        id: "the-hobbit",
        name: "The Hobbit",
        rootSlug: "the-hobbit",
        theme: "the-hobbit",
        categories: ["books"],
        copyright: {
            title: "The Hobbit is not owned by Ton-o-Lore.",
            body:
                "The Hobbit, related names, marks, and materials are the property of Tolkien estate / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-hobbit": ["The Hobbit"]
    },
    parents: {}
});
