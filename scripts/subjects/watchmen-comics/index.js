/**
 * Watchmen — Comics & manga subject package.
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
        id: "watchmen-comics",
        name: "Watchmen",
        rootSlug: "watchmen-comics",
        theme: "watchmen-comics",
        categories: ["comics"],
        copyright: {
            title: "Watchmen is not owned by Ton-o-Lore.",
            body:
                "Watchmen, related names, marks, and materials are the property of DC / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "watchmen-comics": ["Watchmen"]
    },
    parents: {}
});
