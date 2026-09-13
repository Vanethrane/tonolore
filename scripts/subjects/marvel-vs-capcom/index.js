/**
 * Marvel vs. Capcom — Fighting games subject package.
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
        id: "marvel-vs-capcom",
        name: "Marvel vs. Capcom",
        rootSlug: "marvel-vs-capcom",
        theme: "marvel-vs-capcom",
        categories: ["fighting-games"],
        copyright: {
            title: "Marvel vs. Capcom is not owned by Ton-o-Lore.",
            body:
                "Marvel vs. Capcom, related names, marks, and materials are the property of Capcom / Marvel / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "marvel-vs-capcom": ["Marvel vs. Capcom"]
    },
    parents: {}
});
