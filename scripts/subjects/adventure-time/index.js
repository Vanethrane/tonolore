/**
 * Adventure Time — Western animation subject package.
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
        id: "adventure-time",
        name: "Adventure Time",
        rootSlug: "adventure-time",
        theme: "adventure-time",
        categories: ["western-animation"],
        copyright: {
            title: "Adventure Time is not owned by Ton-o-Lore.",
            body:
                "Adventure Time, related names, marks, and materials are the property of Cartoon Network / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "adventure-time": ["Adventure Time"]
    },
    parents: {}
});
