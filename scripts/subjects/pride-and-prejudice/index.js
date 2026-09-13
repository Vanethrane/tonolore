/**
 * Pride and Prejudice — Books & literature subject package.
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
        id: "pride-and-prejudice",
        name: "Pride and Prejudice",
        rootSlug: "pride-and-prejudice",
        theme: "pride-and-prejudice",
        categories: ["books"],
        copyright: {
            title: "Pride and Prejudice is not owned by Ton-o-Lore.",
            body:
                "Pride and Prejudice, related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "pride-and-prejudice": ["Pride and Prejudice"]
    },
    parents: {}
});
