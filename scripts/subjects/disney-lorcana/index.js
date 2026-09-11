/**
 * Disney Lorcana subject package.
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
        id: "disney-lorcana",
        name: "Disney Lorcana",
        rootSlug: "disney-lorcana",
        theme: "disney-lorcana",
        categories: ["card-games"],
        copyright: {
            title: "Disney Lorcana is not owned by Ton-o-Lore.",
            body:
                "Disney Lorcana, related names, logos, and game materials are the property of Ravensburger / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "disney-lorcana": ["Disney Lorcana"]
    },
    parents: {}
});
