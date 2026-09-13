/**
 * Black Mirror — Science fiction subject package.
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
        id: "black-mirror",
        name: "Black Mirror",
        rootSlug: "black-mirror",
        theme: "black-mirror",
        categories: ["sci-fi"],
        copyright: {
            title: "Black Mirror is not owned by Ton-o-Lore.",
            body:
                "Black Mirror, related names, marks, and materials are the property of Netflix / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "black-mirror": ["Black Mirror"]
    },
    parents: {}
});
