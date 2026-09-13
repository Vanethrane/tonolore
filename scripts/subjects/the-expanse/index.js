/**
 * The Expanse — Science fiction subject package.
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
        id: "the-expanse",
        name: "The Expanse",
        rootSlug: "the-expanse",
        theme: "the-expanse",
        categories: ["sci-fi"],
        copyright: {
            title: "The Expanse is not owned by Ton-o-Lore.",
            body:
                "The Expanse, related names, marks, and materials are the property of Amazon / Alcon / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-expanse": ["The Expanse"]
    },
    parents: {}
});
