/**
 * Rick and Morty — Western animation subject package.
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
        id: "rick-and-morty",
        name: "Rick and Morty",
        rootSlug: "rick-and-morty",
        theme: "rick-and-morty",
        categories: ["western-animation"],
        copyright: {
            title: "Rick and Morty is not owned by Ton-o-Lore.",
            body:
                "Rick and Morty, related names, marks, and materials are the property of Adult Swim / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "rick-and-morty": ["Rick and Morty"]
    },
    parents: {}
});
