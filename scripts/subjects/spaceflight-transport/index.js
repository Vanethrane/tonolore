/**
 * Spaceflight as transport — Transport & machines subject package.
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
        id: "spaceflight-transport",
        name: "Spaceflight as transport",
        rootSlug: "spaceflight-transport",
        theme: "spaceflight-transport",
        categories: ["transport"],
        copyright: {
            title: "Spaceflight as transport is not owned by Ton-o-Lore.",
            body:
                "Spaceflight as transport, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "spaceflight-transport": ["Spaceflight as transport"]
    },
    parents: {}
});
