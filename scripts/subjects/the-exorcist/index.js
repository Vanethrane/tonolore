/**
 * The Exorcist — Horror subject package.
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
        id: "the-exorcist",
        name: "The Exorcist",
        rootSlug: "the-exorcist",
        theme: "the-exorcist",
        categories: ["horror"],
        copyright: {
            title: "The Exorcist is not owned by Ton-o-Lore.",
            body:
                "The Exorcist, related names, marks, and materials are the property of Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-exorcist": ["The Exorcist"]
    },
    parents: {}
});
