/**
 * Historic port cities — Maritime subject package.
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
        id: "port-cities",
        name: "Historic port cities",
        rootSlug: "port-cities",
        theme: "port-cities",
        categories: ["maritime"],
        copyright: {
            title: "Historic port cities is not owned by Ton-o-Lore.",
            body:
                "Historic port cities, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "port-cities": ["Historic port cities"]
    },
    parents: {}
});
