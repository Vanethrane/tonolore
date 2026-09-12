/**
 * EuroLeague — Basketball subject package.
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
        id: "euroleague",
        name: "EuroLeague",
        rootSlug: "euroleague",
        theme: "euroleague",
        categories: ["sports"],
        sportsSport: "basketball",
        copyright: {
            title: "EuroLeague is not owned by Ton-o-Lore.",
            body:
                "EuroLeague, related names, marks, and materials are the property of Euroleague Basketball / respective clubs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "euroleague": ["EuroLeague"]
    },
    parents: {}
});
