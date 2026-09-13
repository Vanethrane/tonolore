/**
 * Exxon Valdez oil spill — Disasters & catastrophes subject package.
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
        id: "exxon-valdez",
        name: "Exxon Valdez oil spill",
        rootSlug: "exxon-valdez",
        theme: "exxon-valdez",
        categories: ["disasters"],
        copyright: {
            title: "Exxon Valdez oil spill is not owned by Ton-o-Lore.",
            body:
                "Exxon Valdez oil spill, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "exxon-valdez": ["Exxon Valdez oil spill"]
    },
    parents: {}
});
