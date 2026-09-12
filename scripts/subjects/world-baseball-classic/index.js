/**
 * World Baseball Classic — Baseball subject package.
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
        id: "world-baseball-classic",
        name: "World Baseball Classic",
        rootSlug: "world-baseball-classic",
        theme: "world-baseball-classic",
        categories: ["sports"],
        sportsSport: "baseball",
        copyright: {
            title: "World Baseball Classic is not owned by Ton-o-Lore.",
            body:
                "World Baseball Classic, related names, marks, and materials are the property of WBSC / MLB / respective federations and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "world-baseball-classic": ["World Baseball Classic"]
    },
    parents: {}
});
