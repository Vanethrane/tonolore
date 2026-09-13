/**
 * Neuromancer — Science fiction subject package.
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
        id: "neuromancer-lore",
        name: "Neuromancer",
        rootSlug: "neuromancer-lore",
        theme: "neuromancer-lore",
        categories: ["sci-fi"],
        copyright: {
            title: "Neuromancer is not owned by Ton-o-Lore.",
            body:
                "Neuromancer, related names, marks, and materials are the property of Gibson / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "neuromancer-lore": ["Neuromancer"]
    },
    parents: {}
});
