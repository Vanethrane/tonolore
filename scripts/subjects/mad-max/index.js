/**
 * Mad Max — Movies subject package.
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
        id: "mad-max",
        name: "Mad Max",
        rootSlug: "mad-max",
        theme: "mad-max",
        categories: ["movies"],
        copyright: {
            title: "Mad Max is not owned by Ton-o-Lore.",
            body:
                "Mad Max, related names, marks, and materials are the property of Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "mad-max": ["Mad Max"]
    },
    parents: {}
});
