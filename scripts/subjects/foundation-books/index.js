/**
 * Foundation (books) — Books & literature subject package.
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
        id: "foundation-books",
        name: "Foundation (books)",
        rootSlug: "foundation-books",
        theme: "foundation-books",
        categories: ["books"],
        copyright: {
            title: "Foundation (books) is not owned by Ton-o-Lore.",
            body:
                "Foundation (books), related names, marks, and materials are the property of Asimov estate / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "foundation-books": ["Foundation (books)"]
    },
    parents: {}
});
