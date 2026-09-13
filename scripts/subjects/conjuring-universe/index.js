/**
 * The Conjuring Universe — Horror subject package.
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
        id: "conjuring-universe",
        name: "The Conjuring Universe",
        rootSlug: "conjuring-universe",
        theme: "conjuring-universe",
        categories: ["horror"],
        copyright: {
            title: "The Conjuring Universe is not owned by Ton-o-Lore.",
            body:
                "The Conjuring Universe, related names, marks, and materials are the property of Warner Bros. / New Line / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "conjuring-universe": ["The Conjuring Universe"]
    },
    parents: {}
});
