/**
 * CIA covert operations history — Crime & underworld subject package.
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
        id: "cia-covert-crime",
        name: "CIA covert operations history",
        rootSlug: "cia-covert-crime",
        theme: "cia-covert-crime",
        categories: ["crime"],
        copyright: {
            title: "CIA covert operations history is not owned by Ton-o-Lore.",
            body:
                "CIA covert operations history, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "cia-covert-crime": ["CIA covert operations history"]
    },
    parents: {}
});
