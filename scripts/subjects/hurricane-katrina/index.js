/**
 * Hurricane Katrina — Disasters & catastrophes subject package.
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
        id: "hurricane-katrina",
        name: "Hurricane Katrina",
        rootSlug: "hurricane-katrina",
        theme: "hurricane-katrina",
        categories: ["disasters"],
        copyright: {
            title: "Hurricane Katrina is not owned by Ton-o-Lore.",
            body:
                "Hurricane Katrina, related names, marks, and materials are the property of Public historical record / respective agencies and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "hurricane-katrina": ["Hurricane Katrina"]
    },
    parents: {}
});
