/**
 * Nazca Lines — Unexplained subject package.
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
        id: "nazca-lines",
        name: "Nazca Lines",
        rootSlug: "nazca-lines",
        theme: "nazca-lines",
        categories: ["unexplained"],
        copyright: {
            title: "Nazca Lines is not owned by Ton-o-Lore.",
            body:
                "Nazca Lines, related names, marks, and materials are the property of Public archaeological record / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "nazca-lines": ["Nazca Lines"]
    },
    parents: {}
});
