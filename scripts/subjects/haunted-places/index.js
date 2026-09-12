/**
 * Haunted places — Unexplained subject package.
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
        id: "haunted-places",
        name: "Haunted places",
        rootSlug: "haunted-places",
        theme: "haunted-places",
        categories: ["unexplained"],
        copyright: {
            title: "Haunted places is not owned by Ton-o-Lore.",
            body:
                "Haunted places, related names, marks, and materials are the property of Public folklore and historical record / respective property owners and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "haunted-places": ["Haunted places"]
    },
    parents: {}
});
