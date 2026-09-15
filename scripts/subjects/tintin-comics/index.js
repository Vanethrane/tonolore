/**
 * The Adventures of Tintin — Comics & manga subject package.
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
        id: "tintin-comics",
        name: "The Adventures of Tintin",
        rootSlug: "tintin-comics",
        theme: "tintin-comics",
        categories: ["comics"],
        copyright: {
            title: "The Adventures of Tintin is not owned by Ton-o-Lore.",
            body:
                "The Adventures of Tintin, related names, marks, and materials are the property of Moulinsart / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "tintin-comics": ["The Adventures of Tintin"]
    },
    parents: {}
});
