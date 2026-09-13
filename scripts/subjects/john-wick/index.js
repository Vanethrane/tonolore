/**
 * John Wick — Movies subject package.
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
        id: "john-wick",
        name: "John Wick",
        rootSlug: "john-wick",
        theme: "john-wick",
        categories: ["movies"],
        copyright: {
            title: "John Wick is not owned by Ton-o-Lore.",
            body:
                "John Wick, related names, marks, and materials are the property of Lionsgate / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "john-wick": ["John Wick"]
    },
    parents: {}
});
