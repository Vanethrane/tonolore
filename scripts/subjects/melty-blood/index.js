/**
 * Melty Blood — Fighting games subject package.
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
        id: "melty-blood",
        name: "Melty Blood",
        rootSlug: "melty-blood",
        theme: "melty-blood",
        categories: ["fighting-games"],
        copyright: {
            title: "Melty Blood is not owned by Ton-o-Lore.",
            body:
                "Melty Blood, related names, marks, and materials are the property of Type-Moon / French Bread / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "melty-blood": ["Melty Blood"]
    },
    parents: {}
});
