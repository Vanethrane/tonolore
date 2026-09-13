/**
 * Hyperion Cantos — Science fiction subject package.
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
        id: "hyperion-cantos",
        name: "Hyperion Cantos",
        rootSlug: "hyperion-cantos",
        theme: "hyperion-cantos",
        categories: ["sci-fi"],
        copyright: {
            title: "Hyperion Cantos is not owned by Ton-o-Lore.",
            body:
                "Hyperion Cantos, related names, marks, and materials are the property of Dan Simmons / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "hyperion-cantos": ["Hyperion Cantos"]
    },
    parents: {}
});
