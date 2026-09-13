/**
 * Art theft — Crime & underworld subject package.
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
        id: "art-theft",
        name: "Art theft",
        rootSlug: "art-theft",
        theme: "art-theft",
        categories: ["crime"],
        copyright: {
            title: "Art theft is not owned by Ton-o-Lore.",
            body:
                "Art theft, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "art-theft": ["Art theft"]
    },
    parents: {}
});
