/**
 * Guilty Gear — Fighting games subject package.
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
        id: "guilty-gear",
        name: "Guilty Gear",
        rootSlug: "guilty-gear",
        theme: "guilty-gear",
        categories: ["fighting-games"],
        copyright: {
            title: "Guilty Gear is not owned by Ton-o-Lore.",
            body:
                "Guilty Gear, related names, marks, and materials are the property of Arc System Works / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "guilty-gear": ["Guilty Gear"]
    },
    parents: {}
});
