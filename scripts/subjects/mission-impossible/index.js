/**
 * Mission: Impossible — Movies subject package.
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
        id: "mission-impossible",
        name: "Mission: Impossible",
        rootSlug: "mission-impossible",
        theme: "mission-impossible",
        categories: ["movies"],
        copyright: {
            title: "Mission: Impossible is not owned by Ton-o-Lore.",
            body:
                "Mission: Impossible, related names, marks, and materials are the property of Paramount / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "mission-impossible": ["Mission: Impossible"]
    },
    parents: {}
});
