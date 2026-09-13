/**
 * West End theatre — Theater & musicals subject package.
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
        id: "west-end-theatre",
        name: "West End theatre",
        rootSlug: "west-end-theatre",
        theme: "west-end-theatre",
        categories: ["theater"],
        copyright: {
            title: "West End theatre is not owned by Ton-o-Lore.",
            body:
                "West End theatre, related names, marks, and materials are the property of Public theatre history / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "west-end-theatre": ["West End theatre"]
    },
    parents: {}
});
