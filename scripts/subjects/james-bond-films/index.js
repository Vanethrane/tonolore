/**
 * James Bond films — Movies subject package.
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
        id: "james-bond-films",
        name: "James Bond films",
        rootSlug: "james-bond-films",
        theme: "james-bond-films",
        categories: ["movies"],
        copyright: {
            title: "James Bond films is not owned by Ton-o-Lore.",
            body:
                "James Bond films, related names, marks, and materials are the property of Eon / MGM / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "james-bond-films": ["James Bond films"]
    },
    parents: {}
});
