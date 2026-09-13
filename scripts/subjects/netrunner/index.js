/**
 * Android: Netrunner — Card games subject package.
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
        id: "netrunner",
        name: "Android: Netrunner",
        rootSlug: "netrunner",
        theme: "netrunner",
        categories: ["card-games"],
        copyright: {
            title: "Android: Netrunner is not owned by Ton-o-Lore.",
            body:
                "Android: Netrunner, related names, marks, and materials are the property of Fantasy Flight / Wizards legacy / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "netrunner": ["Android: Netrunner"]
    },
    parents: {}
});
