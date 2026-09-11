/**
 * Wine — Food & drink subject package.
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
        id: "wine",
        name: "Wine",
        rootSlug: "wine",
        theme: "wine",
        categories: ["culinary"],
        copyright: {
            title: "Wine is not owned by Ton-o-Lore.",
            body:
                "Wine, related names, marks, and materials are the property of Public viticultural tradition / respective estates and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "wine": ["Wine"]
    },
    parents: {}
});
