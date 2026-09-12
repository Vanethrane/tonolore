/**
 * Babylon 5 — Science fiction subject package.
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
        id: "babylon-5",
        name: "Babylon 5",
        rootSlug: "babylon-5",
        theme: "babylon-5",
        categories: ["sci-fi"],
        copyright: {
            title: "Babylon 5 is not owned by Ton-o-Lore.",
            body:
                "Babylon 5, related names, marks, and materials are the property of Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "babylon-5": ["Babylon 5"]
    },
    parents: {}
});
