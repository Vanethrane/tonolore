/**
 * Green Lantern — Comics & manga subject package.
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
        id: "green-lantern-comics",
        name: "Green Lantern",
        rootSlug: "green-lantern-comics",
        theme: "green-lantern-comics",
        categories: ["comics"],
        copyright: {
            title: "Green Lantern is not owned by Ton-o-Lore.",
            body:
                "Green Lantern, related names, marks, and materials are the property of DC / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "green-lantern-comics": ["Green Lantern"]
    },
    parents: {}
});
