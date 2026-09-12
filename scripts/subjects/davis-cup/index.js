/**
 * Davis Cup — Tennis subject package.
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
        id: "davis-cup",
        name: "Davis Cup",
        rootSlug: "davis-cup",
        theme: "davis-cup",
        categories: ["sports"],
        sportsSport: "tennis",
        copyright: {
            title: "Davis Cup is not owned by Ton-o-Lore.",
            body:
                "Davis Cup, related names, marks, and materials are the property of ITF / respective federations and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "davis-cup": ["Davis Cup"]
    },
    parents: {}
});
