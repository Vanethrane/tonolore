/**
 * Mount St. Helens — Disasters & catastrophes subject package.
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
        id: "mount-st-helens",
        name: "Mount St. Helens",
        rootSlug: "mount-st-helens",
        theme: "mount-st-helens",
        categories: ["disasters"],
        copyright: {
            title: "Mount St. Helens is not owned by Ton-o-Lore.",
            body:
                "Mount St. Helens, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "mount-st-helens": ["Mount St. Helens"]
    },
    parents: {}
});
