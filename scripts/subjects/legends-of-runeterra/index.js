/**
 * Legends of Runeterra — Card games subject package.
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
        id: "legends-of-runeterra",
        name: "Legends of Runeterra",
        rootSlug: "legends-of-runeterra",
        theme: "legends-of-runeterra",
        categories: ["card-games"],
        copyright: {
            title: "Legends of Runeterra is not owned by Ton-o-Lore.",
            body:
                "Legends of Runeterra, related names, marks, and materials are the property of Riot Games / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "legends-of-runeterra": ["Legends of Runeterra"]
    },
    parents: {}
});
