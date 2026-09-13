/**
 * True Detective — Television subject package.
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
        id: "true-detective",
        name: "True Detective",
        rootSlug: "true-detective",
        theme: "true-detective",
        categories: ["television"],
        copyright: {
            title: "True Detective is not owned by Ton-o-Lore.",
            body:
                "True Detective, related names, marks, and materials are the property of HBO / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "true-detective": ["True Detective"]
    },
    parents: {}
});
