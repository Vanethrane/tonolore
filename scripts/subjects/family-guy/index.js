/**
 * Family Guy — Western animation subject package.
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
        id: "family-guy",
        name: "Family Guy",
        rootSlug: "family-guy",
        theme: "family-guy",
        categories: ["western-animation"],
        copyright: {
            title: "Family Guy is not owned by Ton-o-Lore.",
            body:
                "Family Guy, related names, marks, and materials are the property of Fox / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "family-guy": ["Family Guy"]
    },
    parents: {}
});
