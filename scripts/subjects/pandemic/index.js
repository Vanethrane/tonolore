/**
 * Pandemic subject package.
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
        id: "pandemic",
        name: "Pandemic",
        rootSlug: "pandemic",
        theme: "pandemic",
        categories: ["tabletop"],
        copyright: {
            title: "Pandemic is not owned by Ton-o-Lore.",
            body:
                "Pandemic, related names, logos, and game materials are the property of Z-Man Games / Asmodee / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "pandemic": ["Pandemic"]
    },
    parents: {}
});
