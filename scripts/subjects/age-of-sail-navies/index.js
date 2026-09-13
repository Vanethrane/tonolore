/**
 * Age of Sail navies — Maritime subject package.
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
        id: "age-of-sail-navies",
        name: "Age of Sail navies",
        rootSlug: "age-of-sail-navies",
        theme: "age-of-sail-navies",
        categories: ["maritime"],
        copyright: {
            title: "Age of Sail navies is not owned by Ton-o-Lore.",
            body:
                "Age of Sail navies, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "age-of-sail-navies": ["Age of Sail navies"]
    },
    parents: {}
});
