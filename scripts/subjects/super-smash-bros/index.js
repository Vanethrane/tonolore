/**
 * Super Smash Bros. — Fighting games subject package.
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
        id: "super-smash-bros",
        name: "Super Smash Bros.",
        rootSlug: "super-smash-bros",
        theme: "super-smash-bros",
        categories: ["fighting-games"],
        copyright: {
            title: "Super Smash Bros. is not owned by Ton-o-Lore.",
            body:
                "Super Smash Bros., related names, marks, and materials are the property of Nintendo / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "super-smash-bros": ["Super Smash Bros."]
    },
    parents: {}
});
