/**
 * MotoGP — Motorsport subject package.
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
        id: "motogp",
        name: "MotoGP",
        rootSlug: "motogp",
        theme: "motogp",
        categories: ["sports"],
        sportsSport: "motorsport",
        copyright: {
            title: "MotoGP is not owned by Ton-o-Lore.",
            body:
                "MotoGP, related names, marks, and materials are the property of Dorna / FIM / respective teams and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "motogp": ["MotoGP"]
    },
    parents: {}
});
