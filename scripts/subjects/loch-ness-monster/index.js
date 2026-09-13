/**
 * Loch Ness Monster — Unexplained subject package.
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
        id: "loch-ness-monster",
        name: "Loch Ness Monster",
        rootSlug: "loch-ness-monster",
        theme: "loch-ness-monster",
        categories: ["unexplained"],
        copyright: {
            title: "Loch Ness Monster is not owned by Ton-o-Lore.",
            body:
                "Loch Ness Monster, related names, marks, and materials are the property of Public folklore / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "loch-ness-monster": ["Loch Ness Monster"]
    },
    parents: {}
});
