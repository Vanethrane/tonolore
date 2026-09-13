/**
 * The King of Fighters — Fighting games subject package.
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
        id: "king-of-fighters",
        name: "The King of Fighters",
        rootSlug: "king-of-fighters",
        theme: "king-of-fighters",
        categories: ["fighting-games"],
        copyright: {
            title: "The King of Fighters is not owned by Ton-o-Lore.",
            body:
                "The King of Fighters, related names, marks, and materials are the property of SNK / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "king-of-fighters": ["The King of Fighters"]
    },
    parents: {}
});
