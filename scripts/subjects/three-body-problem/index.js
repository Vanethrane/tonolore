/**
 * The Three-Body Problem — Science fiction subject package.
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
        id: "three-body-problem",
        name: "The Three-Body Problem",
        rootSlug: "three-body-problem",
        theme: "three-body-problem",
        categories: ["sci-fi"],
        copyright: {
            title: "The Three-Body Problem is not owned by Ton-o-Lore.",
            body:
                "The Three-Body Problem, related names, marks, and materials are the property of Liu Cixin / Netflix / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "three-body-problem": ["The Three-Body Problem"]
    },
    parents: {}
});
