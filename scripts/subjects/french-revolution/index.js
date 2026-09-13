/**
 * French Revolution — History subject package.
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
        id: "french-revolution",
        name: "French Revolution",
        rootSlug: "french-revolution",
        theme: "french-revolution",
        categories: ["history"],
        copyright: {
            title: "French Revolution is not owned by Ton-o-Lore.",
            body:
                "French Revolution, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "french-revolution": ["French Revolution"]
    },
    parents: {}
});
