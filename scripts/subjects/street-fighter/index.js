/**
 * Street Fighter — Fighting games subject package.
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
        id: "street-fighter",
        name: "Street Fighter",
        rootSlug: "street-fighter",
        theme: "street-fighter",
        categories: ["fighting-games"],
        copyright: {
            title: "Street Fighter is not owned by Ton-o-Lore.",
            body:
                "Street Fighter, related names, marks, and materials are the property of Capcom / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "street-fighter": ["Street Fighter"]
    },
    parents: {}
});
