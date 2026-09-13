/**
 * Altered Carbon — Science fiction subject package.
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
        id: "altered-carbon",
        name: "Altered Carbon",
        rootSlug: "altered-carbon",
        theme: "altered-carbon",
        categories: ["sci-fi"],
        copyright: {
            title: "Altered Carbon is not owned by Ton-o-Lore.",
            body:
                "Altered Carbon, related names, marks, and materials are the property of Netflix / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "altered-carbon": ["Altered Carbon"]
    },
    parents: {}
});
