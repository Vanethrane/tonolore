/**
 * Street Fighter Alpha — Fighting games subject package.
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
        id: "street-fighter-alpha",
        name: "Street Fighter Alpha",
        rootSlug: "street-fighter-alpha",
        theme: "street-fighter-alpha",
        categories: ["fighting-games"],
        copyright: {
            title: "Street Fighter Alpha is not owned by Ton-o-Lore.",
            body:
                "Street Fighter Alpha, related names, marks, and materials are the property of Capcom / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "street-fighter-alpha": ["Street Fighter Alpha"]
    },
    parents: {}
});
