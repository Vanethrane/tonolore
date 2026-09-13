/**
 * Ancient weapons — Military & fortresses subject package.
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
        id: "ancient-weaponry",
        name: "Ancient weapons",
        rootSlug: "ancient-weaponry",
        theme: "ancient-weaponry",
        categories: ["military"],
        copyright: {
            title: "Ancient weapons is not owned by Ton-o-Lore.",
            body:
                "Ancient weapons, related names, marks, and materials are the property of Public historical and archaeological record / respective museums and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ancient-weaponry": ["Ancient weapons", "Ancient weaponry"]
    },
    parents: {}
});
