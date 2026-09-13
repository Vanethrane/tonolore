/**
 * Asian organized crime — Crime & underworld subject package.
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
        id: "organized-crime-asia",
        name: "Asian organized crime",
        rootSlug: "organized-crime-asia",
        theme: "organized-crime-asia",
        categories: ["crime"],
        copyright: {
            title: "Asian organized crime is not owned by Ton-o-Lore.",
            body:
                "Asian organized crime, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "organized-crime-asia": ["Asian organized crime"]
    },
    parents: {}
});
