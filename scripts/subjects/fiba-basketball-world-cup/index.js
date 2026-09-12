/**
 * FIBA Basketball World Cup — Basketball subject package.
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
        id: "fiba-basketball-world-cup",
        name: "FIBA Basketball World Cup",
        rootSlug: "fiba-basketball-world-cup",
        theme: "fiba-basketball-world-cup",
        categories: ["sports"],
        sportsSport: "basketball",
        copyright: {
            title: "FIBA Basketball World Cup is not owned by Ton-o-Lore.",
            body:
                "FIBA Basketball World Cup, related names, marks, and materials are the property of FIBA / respective federations and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "fiba-basketball-world-cup": ["FIBA Basketball World Cup"]
    },
    parents: {}
});
