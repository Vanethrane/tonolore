/**
 * Historical clothing — History subject package.
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
        id: "historical-clothing",
        name: "Historical clothing",
        rootSlug: "historical-clothing",
        theme: "historical-clothing",
        categories: ["history"],
        copyright: {
            title: "Historical clothing is not owned by Ton-o-Lore.",
            body:
                "Historical clothing, related names, marks, and materials are the property of Public historical and material-culture record / respective museums and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "historical-clothing": ["Historical clothing"]
    },
    parents: {}
});
