/**
 * World Wonder Ring Stardom — Pro wrestling subject package.
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
        id: "stardom-wrestling",
        name: "World Wonder Ring Stardom",
        rootSlug: "stardom-wrestling",
        theme: "stardom-wrestling",
        categories: ["wrestling"],
        copyright: {
            title: "World Wonder Ring Stardom is not owned by Ton-o-Lore.",
            body:
                "World Wonder Ring Stardom, related names, marks, and materials are the property of Stardom / Bushiroad / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "stardom-wrestling": ["World Wonder Ring Stardom"]
    },
    parents: {}
});
