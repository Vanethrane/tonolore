/**
 * The Chronicles of Narnia — Books & literature subject package.
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
        id: "narnia",
        name: "The Chronicles of Narnia",
        rootSlug: "narnia",
        theme: "narnia",
        categories: ["books"],
        copyright: {
            title: "The Chronicles of Narnia is not owned by Ton-o-Lore.",
            body:
                "The Chronicles of Narnia, related names, marks, and materials are the property of Lewis estate / HarperCollins / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "narnia": ["The Chronicles of Narnia"]
    },
    parents: {}
});
