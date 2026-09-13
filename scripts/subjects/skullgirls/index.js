/**
 * Skullgirls — Fighting games subject package.
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
        id: "skullgirls",
        name: "Skullgirls",
        rootSlug: "skullgirls",
        theme: "skullgirls",
        categories: ["fighting-games"],
        copyright: {
            title: "Skullgirls is not owned by Ton-o-Lore.",
            body:
                "Skullgirls, related names, marks, and materials are the property of Lab Zero / Hidden Variable / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "skullgirls": ["Skullgirls"]
    },
    parents: {}
});
