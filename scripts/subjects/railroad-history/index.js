/**
 * Railroad history — Transport & machines subject package.
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
        id: "railroad-history",
        name: "Railroad history",
        rootSlug: "railroad-history",
        theme: "railroad-history",
        categories: ["transport"],
        copyright: {
            title: "Railroad history is not owned by Ton-o-Lore.",
            body:
                "Railroad history, related names, marks, and materials are the property of Public railroad history / respective companies and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "railroad-history": ["Railroad history"]
    },
    parents: {}
});
