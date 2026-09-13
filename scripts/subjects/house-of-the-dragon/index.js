/**
 * House of the Dragon — Television subject package.
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
        id: "house-of-the-dragon",
        name: "House of the Dragon",
        rootSlug: "house-of-the-dragon",
        theme: "house-of-the-dragon",
        categories: ["television"],
        copyright: {
            title: "House of the Dragon is not owned by Ton-o-Lore.",
            body:
                "House of the Dragon, related names, marks, and materials are the property of HBO / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "house-of-the-dragon": ["House of the Dragon"]
    },
    parents: {}
});
