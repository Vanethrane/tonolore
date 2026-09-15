/**
 * East of West — Comics & manga subject package.
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
        id: "east-of-west",
        name: "East of West",
        rootSlug: "east-of-west",
        theme: "east-of-west",
        categories: ["comics"],
        copyright: {
            title: "East of West is not owned by Ton-o-Lore.",
            body:
                "East of West, related names, marks, and materials are the property of Image Comics / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "east-of-west": ["East of West"]
    },
    parents: {}
});
