/**
 * Al Capone era — Crime & underworld subject package.
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
        id: "al-capone-era",
        name: "Al Capone era",
        rootSlug: "al-capone-era",
        theme: "al-capone-era",
        categories: ["crime"],
        copyright: {
            title: "Al Capone era is not owned by Ton-o-Lore.",
            body:
                "Al Capone era, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "al-capone-era": ["Al Capone era"]
    },
    parents: {}
});
