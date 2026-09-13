/**
 * Pro Wrestling Noah — Pro wrestling subject package.
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
        id: "pro-wrestling-noah",
        name: "Pro Wrestling Noah",
        rootSlug: "pro-wrestling-noah",
        theme: "pro-wrestling-noah",
        categories: ["wrestling"],
        copyright: {
            title: "Pro Wrestling Noah is not owned by Ton-o-Lore.",
            body:
                "Pro Wrestling Noah, related names, marks, and materials are the property of Noah / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "pro-wrestling-noah": ["Pro Wrestling Noah"]
    },
    parents: {}
});
