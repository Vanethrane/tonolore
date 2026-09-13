/**
 * Bermuda Triangle — Unexplained subject package.
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
        id: "bermuda-triangle",
        name: "Bermuda Triangle",
        rootSlug: "bermuda-triangle",
        theme: "bermuda-triangle",
        categories: ["unexplained"],
        copyright: {
            title: "Bermuda Triangle is not owned by Ton-o-Lore.",
            body:
                "Bermuda Triangle, related names, marks, and materials are the property of Public folklore / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "bermuda-triangle": ["Bermuda Triangle"]
    },
    parents: {}
});
