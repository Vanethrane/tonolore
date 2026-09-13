/**
 * Hundred Years' War — Military & fortresses subject package.
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
        id: "hundred-years-war",
        name: "Hundred Years' War",
        rootSlug: "hundred-years-war",
        theme: "hundred-years-war",
        categories: ["military"],
        copyright: {
            title: "Hundred Years' War is not owned by Ton-o-Lore.",
            body:
                "Hundred Years' War, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "hundred-years-war": ["Hundred Years' War"]
    },
    parents: {}
});
