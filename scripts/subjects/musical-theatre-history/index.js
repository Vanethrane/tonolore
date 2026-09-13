/**
 * Musical theatre history — Theater & musicals subject package.
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
        id: "musical-theatre-history",
        name: "Musical theatre history",
        rootSlug: "musical-theatre-history",
        theme: "musical-theatre-history",
        categories: ["theater"],
        copyright: {
            title: "Musical theatre history is not owned by Ton-o-Lore.",
            body:
                "Musical theatre history, related names, marks, and materials are the property of Public theatre history / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "musical-theatre-history": ["Musical theatre history"]
    },
    parents: {}
});
