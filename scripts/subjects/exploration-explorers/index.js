/**
 * Exploration & explorers — History subject package.
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
        id: "exploration-explorers",
        name: "Exploration & explorers",
        rootSlug: "exploration-explorers",
        theme: "exploration-explorers",
        categories: ["history"],
        copyright: {
            title: "Exploration & explorers is not owned by Ton-o-Lore.",
            body:
                "Exploration & explorers, related names, marks, and materials are the property of Public historical and geographic record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "exploration-explorers": ["Exploration & explorers"]
    },
    parents: {}
});
