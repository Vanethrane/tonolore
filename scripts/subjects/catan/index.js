/**
 * Catan subject package.
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
        id: "catan",
        name: "Catan",
        rootSlug: "catan",
        theme: "catan",
        categories: ["tabletop"],
        copyright: {
            title: "Catan is not owned by Ton-o-Lore.",
            body:
                "Catan, related names, logos, and game materials are the property of Catan GmbH / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "catan": ["Catan"]
    },
    parents: {}
});
