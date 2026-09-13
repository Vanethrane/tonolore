/**
 * Gravity Falls — Western animation subject package.
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
        id: "gravity-falls",
        name: "Gravity Falls",
        rootSlug: "gravity-falls",
        theme: "gravity-falls",
        categories: ["western-animation"],
        copyright: {
            title: "Gravity Falls is not owned by Ton-o-Lore.",
            body:
                "Gravity Falls, related names, marks, and materials are the property of Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "gravity-falls": ["Gravity Falls"]
    },
    parents: {}
});
