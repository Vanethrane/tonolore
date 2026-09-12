/**
 * The Shining — Horror subject package.
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
        id: "the-shining-lore",
        name: "The Shining",
        rootSlug: "the-shining-lore",
        theme: "the-shining-lore",
        categories: ["horror"],
        copyright: {
            title: "The Shining is not owned by Ton-o-Lore.",
            body:
                "The Shining, related names, marks, and materials are the property of Warner Bros. / King estate / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-shining-lore": ["The Shining"]
    },
    parents: {}
});
