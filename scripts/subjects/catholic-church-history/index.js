/**
 * Catholic Church history — Religion & belief subject package.
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
        id: "catholic-church-history",
        name: "Catholic Church history",
        rootSlug: "catholic-church-history",
        theme: "catholic-church-history",
        categories: ["religion"],
        copyright: {
            title: "Catholic Church history is not owned by Ton-o-Lore.",
            body:
                "Catholic Church history, related names, marks, and materials are the property of Public historical record / respective churches. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "catholic-church-history": ["Catholic Church history"]
    },
    parents: {}
});
