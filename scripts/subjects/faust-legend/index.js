/**
 * Faust legend — Folklore & legend subject package.
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
        id: "faust-legend",
        name: "Faust legend",
        rootSlug: "faust-legend",
        theme: "faust-legend",
        categories: ["folklore"],
        copyright: {
            title: "Faust legend is not owned by Ton-o-Lore.",
            body:
                "Faust legend, related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "faust-legend": ["Faust legend"]
    },
    parents: {}
});
