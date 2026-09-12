/**
 * Heretical movements & religious mysteries — Religion & belief subject package.
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
        id: "heretical-movements",
        name: "Heretical movements & religious mysteries",
        rootSlug: "heretical-movements",
        theme: "heretical-movements",
        categories: ["religion"],
        copyright: {
            title: "Heretical movements & religious mysteries is not owned by Ton-o-Lore.",
            body:
                "Heretical movements & religious mysteries, related names, marks, and materials are the property of Public historical and theological record / respective faiths and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "heretical-movements": ["Heretical movements & religious mysteries"]
    },
    parents: {}
});
