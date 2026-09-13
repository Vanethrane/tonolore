/**
 * Hyperloop & future transit concepts — Transport & machines subject package.
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
        id: "hyperloop-concepts",
        name: "Hyperloop & future transit concepts",
        rootSlug: "hyperloop-concepts",
        theme: "hyperloop-concepts",
        categories: ["transport"],
        copyright: {
            title: "Hyperloop & future transit concepts is not owned by Ton-o-Lore.",
            body:
                "Hyperloop & future transit concepts, related names, marks, and materials are the property of Public tech discourse / respective companies. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "hyperloop-concepts": ["Hyperloop & future transit concepts"]
    },
    parents: {}
});
