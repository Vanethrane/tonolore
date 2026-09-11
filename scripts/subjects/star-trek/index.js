/**
 * Star Trek — Science fiction subject package.
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
        id: "star-trek",
        name: "Star Trek",
        rootSlug: "star-trek",
        theme: "star-trek",
        categories: ["sci-fi"],
        copyright: {
            title: "Star Trek is not owned by Ton-o-Lore.",
            body:
                "Star Trek, related names, marks, and materials are the property of Paramount / CBS / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "star-trek": ["Star Trek"]
    },
    parents: {}
});
