/**
 * Lost — Television subject package.
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
        id: "lost-series",
        name: "Lost",
        rootSlug: "lost-series",
        theme: "lost-series",
        categories: ["television"],
        copyright: {
            title: "Lost is not owned by Ton-o-Lore.",
            body:
                "Lost, related names, marks, and materials are the property of ABC / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "lost-series": ["Lost"]
    },
    parents: {}
});
