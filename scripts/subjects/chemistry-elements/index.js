/**
 * Chemistry & the elements — Science & nature subject package.
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
        id: "chemistry-elements",
        name: "Chemistry & the elements",
        rootSlug: "chemistry-elements",
        theme: "chemistry-elements",
        categories: ["science-nature"],
        copyright: {
            title: "Chemistry & the elements is not owned by Ton-o-Lore.",
            body:
                "Chemistry & the elements, related names, marks, and materials are the property of Public scientific record / respective institutions and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "chemistry-elements": ["Chemistry & the elements"]
    },
    parents: {}
});
