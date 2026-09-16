/**
 * Y: The Last Man — Comics & manga subject package.
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
        id: "y-the-last-man",
        name: "Y: The Last Man",
        rootSlug: "y-the-last-man",
        theme: "y-the-last-man",
        categories: ["comics"],
        copyright: {
            title: "Y: The Last Man is not owned by Ton-o-Lore.",
            body:
                "Y: The Last Man, related names, marks, and materials are the property of DC/Vertigo / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "y-the-last-man": ["Y: The Last Man"]
    },
    parents: {}
});
