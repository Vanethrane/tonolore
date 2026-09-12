/**
 * Pompeii — Disasters & catastrophes subject package.
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
        id: "pompeii",
        name: "Pompeii",
        rootSlug: "pompeii",
        theme: "pompeii",
        categories: ["disasters"],
        copyright: {
            title: "Pompeii is not owned by Ton-o-Lore.",
            body:
                "Pompeii, related names, marks, and materials are the property of Public archaeological and historical record / respective institutions and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "pompeii": ["Pompeii"]
    },
    parents: {}
});
