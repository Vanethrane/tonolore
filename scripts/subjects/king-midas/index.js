/**
 * King Midas — Folklore & legend subject package.
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
        id: "king-midas",
        name: "King Midas",
        rootSlug: "king-midas",
        theme: "king-midas",
        categories: ["folklore"],
        copyright: {
            title: "King Midas is not owned by Ton-o-Lore.",
            body:
                "King Midas, related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "king-midas": ["King Midas"]
    },
    parents: {}
});
