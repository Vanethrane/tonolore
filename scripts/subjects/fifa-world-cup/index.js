/**
 * FIFA World Cup — Soccer subject package.
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
        id: "fifa-world-cup",
        name: "FIFA World Cup",
        rootSlug: "fifa-world-cup",
        theme: "fifa-world-cup",
        categories: ["sports"],
        sportsSport: "soccer",
        copyright: {
            title: "FIFA World Cup is not owned by Ton-o-Lore.",
            body:
                "FIFA World Cup, related names, marks, and materials are the property of FIFA / respective federations and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "fifa-world-cup": ["FIFA World Cup"]
    },
    parents: {}
});
