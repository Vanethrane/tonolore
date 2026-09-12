/**
 * NCAA men's basketball — Basketball subject package.
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
        id: "ncaa-mens-basketball",
        name: "NCAA men's basketball",
        rootSlug: "ncaa-mens-basketball",
        theme: "ncaa-mens-basketball",
        categories: ["sports"],
        sportsSport: "basketball",
        copyright: {
            title: "NCAA men's basketball is not owned by Ton-o-Lore.",
            body:
                "NCAA men's basketball, related names, marks, and materials are the property of NCAA / respective conferences, schools, and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ncaa-mens-basketball": ["NCAA men's basketball"]
    },
    parents: {}
});
