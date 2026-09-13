/**
 * True crime media history — Crime & underworld subject package.
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
        id: "true-crime-media",
        name: "True crime media history",
        rootSlug: "true-crime-media",
        theme: "true-crime-media",
        categories: ["crime"],
        copyright: {
            title: "True crime media history is not owned by Ton-o-Lore.",
            body:
                "True crime media history, related names, marks, and materials are the property of Public media history / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "true-crime-media": ["True crime media history"]
    },
    parents: {}
});
