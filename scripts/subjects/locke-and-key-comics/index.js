/**
 * Locke & Key — Comics & manga subject package.
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
        id: "locke-and-key-comics",
        name: "Locke & Key",
        rootSlug: "locke-and-key-comics",
        theme: "locke-and-key-comics",
        categories: ["comics"],
        copyright: {
            title: "Locke & Key is not owned by Ton-o-Lore.",
            body:
                "Locke & Key, related names, marks, and materials are the property of IDW / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "locke-and-key-comics": ["Locke & Key"]
    },
    parents: {}
});
