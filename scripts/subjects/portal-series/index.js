/**
 * Portal — Video games subject package.
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
        id: "portal-series",
        name: "Portal",
        rootSlug: "portal-series",
        theme: "portal-series",
        categories: ["video-games"],
        copyright: {
            title: "Portal is not owned by Ton-o-Lore.",
            body:
                "Portal, related names, marks, and materials are the property of Valve / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "portal-series": ["Portal"]
    },
    parents: {}
});
