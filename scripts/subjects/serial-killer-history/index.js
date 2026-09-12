/**
 * Serial killer history — Crime & underworld subject package.
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
        id: "serial-killer-history",
        name: "Serial killer history",
        rootSlug: "serial-killer-history",
        theme: "serial-killer-history",
        categories: ["crime"],
        copyright: {
            title: "Serial killer history is not owned by Ton-o-Lore.",
            body:
                "Serial killer history, related names, marks, and materials are the property of Public historical and legal record / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "serial-killer-history": ["Serial killer history"]
    },
    parents: {}
});
