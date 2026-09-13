/**
 * Ottoman sultans — Royalty & thrones subject package.
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
        id: "ottoman-sultans",
        name: "Ottoman sultans",
        rootSlug: "ottoman-sultans",
        theme: "ottoman-sultans",
        categories: ["royalty"],
        copyright: {
            title: "Ottoman sultans is not owned by Ton-o-Lore.",
            body:
                "Ottoman sultans, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ottoman-sultans": ["Ottoman sultans"]
    },
    parents: {}
});
