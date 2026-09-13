/**
 * Bone — Comics & manga subject package.
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
        id: "bone-comics",
        name: "Bone",
        rootSlug: "bone-comics",
        theme: "bone-comics",
        categories: ["comics"],
        copyright: {
            title: "Bone is not owned by Ton-o-Lore.",
            body:
                "Bone, related names, marks, and materials are the property of Smith / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "bone-comics": ["Bone"]
    },
    parents: {}
});
