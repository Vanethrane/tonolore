/**
 * Maus — Comics & manga subject package.
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
        id: "maus",
        name: "Maus",
        rootSlug: "maus",
        theme: "maus",
        categories: ["comics"],
        copyright: {
            title: "Maus is not owned by Ton-o-Lore.",
            body:
                "Maus, related names, marks, and materials are the property of Spiegelman / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "maus": ["Maus"]
    },
    parents: {}
});
