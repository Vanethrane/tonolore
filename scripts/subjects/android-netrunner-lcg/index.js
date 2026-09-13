/**
 * Netrunner LCG cycles — Card games subject package.
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
        id: "android-netrunner-lcg",
        name: "Netrunner LCG cycles",
        rootSlug: "android-netrunner-lcg",
        theme: "android-netrunner-lcg",
        categories: ["card-games"],
        copyright: {
            title: "Netrunner LCG cycles is not owned by Ton-o-Lore.",
            body:
                "Netrunner LCG cycles, related names, marks, and materials are the property of Fantasy Flight / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "android-netrunner-lcg": ["Netrunner LCG cycles"]
    },
    parents: {}
});
