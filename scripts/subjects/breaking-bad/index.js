/**
 * Breaking Bad — Television subject package.
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
        id: "breaking-bad",
        name: "Breaking Bad",
        rootSlug: "breaking-bad",
        theme: "breaking-bad",
        categories: ["television"],
        copyright: {
            title: "Breaking Bad is not owned by Ton-o-Lore.",
            body:
                "Breaking Bad, related names, marks, and materials are the property of AMC / Sony / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "breaking-bad": ["Breaking Bad"]
    },
    parents: {}
});
