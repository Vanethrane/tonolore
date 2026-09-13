/**
 * Aviation history — Transport & machines subject package.
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
        id: "aviation-history",
        name: "Aviation history",
        rootSlug: "aviation-history",
        theme: "aviation-history",
        categories: ["transport"],
        copyright: {
            title: "Aviation history is not owned by Ton-o-Lore.",
            body:
                "Aviation history, related names, marks, and materials are the property of Public aviation history / respective manufacturers, agencies, and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "aviation-history": ["Aviation history"]
    },
    parents: {}
});
