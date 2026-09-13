/**
 * Cardfight!! Vanguard — Card games subject package.
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
        id: "cardfight-vanguard",
        name: "Cardfight!! Vanguard",
        rootSlug: "cardfight-vanguard",
        theme: "cardfight-vanguard",
        categories: ["card-games"],
        copyright: {
            title: "Cardfight!! Vanguard is not owned by Ton-o-Lore.",
            body:
                "Cardfight!! Vanguard, related names, marks, and materials are the property of Bushiroad / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "cardfight-vanguard": ["Cardfight!! Vanguard"]
    },
    parents: {}
});
