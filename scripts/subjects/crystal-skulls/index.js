/**
 * Crystal skulls — Unexplained subject package.
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
        id: "crystal-skulls",
        name: "Crystal skulls",
        rootSlug: "crystal-skulls",
        theme: "crystal-skulls",
        categories: ["unexplained"],
        copyright: {
            title: "Crystal skulls is not owned by Ton-o-Lore.",
            body:
                "Crystal skulls, related names, marks, and materials are the property of Public museum / folklore record. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "crystal-skulls": ["Crystal skulls"]
    },
    parents: {}
});
