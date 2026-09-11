/**
 * Critical Role — Podcasts & audio subject package.
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
        id: "critical-role",
        name: "Critical Role",
        rootSlug: "critical-role",
        theme: "critical-role",
        categories: ["podcasts"],
        copyright: {
            title: "Critical Role is not owned by Ton-o-Lore.",
            body:
                "Critical Role, related names, marks, and materials are the property of Critical Role / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "critical-role": ["Critical Role"]
    },
    parents: {}
});
