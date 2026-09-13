/**
 * Great Chicago Fire — Disasters & catastrophes subject package.
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
        id: "great-chicago-fire",
        name: "Great Chicago Fire",
        rootSlug: "great-chicago-fire",
        theme: "great-chicago-fire",
        categories: ["disasters"],
        copyright: {
            title: "Great Chicago Fire is not owned by Ton-o-Lore.",
            body:
                "Great Chicago Fire, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "great-chicago-fire": ["Great Chicago Fire"]
    },
    parents: {}
});
