/**
 * Back to the Future — Movies subject package.
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
        id: "back-to-the-future",
        name: "Back to the Future",
        rootSlug: "back-to-the-future",
        theme: "back-to-the-future",
        categories: ["movies"],
        copyright: {
            title: "Back to the Future is not owned by Ton-o-Lore.",
            body:
                "Back to the Future, related names, marks, and materials are the property of Universal / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "back-to-the-future": ["Back to the Future"]
    },
    parents: {}
});
