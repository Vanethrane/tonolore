/**
 * Evolution & natural selection — Science & nature subject package.
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
        id: "evolution-natural-selection",
        name: "Evolution & natural selection",
        rootSlug: "evolution-natural-selection",
        theme: "evolution-natural-selection",
        categories: ["science-nature"],
        copyright: {
            title: "Evolution & natural selection is not owned by Ton-o-Lore.",
            body:
                "Evolution & natural selection, related names, marks, and materials are the property of Public scientific record / respective institutions and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "evolution-natural-selection": ["Evolution & natural selection"]
    },
    parents: {}
});
