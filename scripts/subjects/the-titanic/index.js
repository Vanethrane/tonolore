/**
 * The Titanic — Maritime subject package.
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
        id: "the-titanic",
        name: "The Titanic",
        rootSlug: "the-titanic",
        theme: "the-titanic",
        categories: ["maritime"],
        copyright: {
            title: "The Titanic is not owned by Ton-o-Lore.",
            body:
                "The Titanic, related names, marks, and materials are the property of Public historical record / respective wreck and estate rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-titanic": ["The Titanic"]
    },
    parents: {}
});
