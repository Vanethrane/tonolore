/**
 * Mughal emperors — Royalty & thrones subject package.
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
        id: "mughal-empire-royalty",
        name: "Mughal emperors",
        rootSlug: "mughal-empire-royalty",
        theme: "mughal-empire-royalty",
        categories: ["royalty"],
        copyright: {
            title: "Mughal emperors is not owned by Ton-o-Lore.",
            body:
                "Mughal emperors, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "mughal-empire-royalty": ["Mughal emperors"]
    },
    parents: {}
});
