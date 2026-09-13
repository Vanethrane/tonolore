/**
 * Planet Money — Podcasts & audio subject package.
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
        id: "planet-money",
        name: "Planet Money",
        rootSlug: "planet-money",
        theme: "planet-money",
        categories: ["podcasts"],
        copyright: {
            title: "Planet Money is not owned by Ton-o-Lore.",
            body:
                "Planet Money, related names, marks, and materials are the property of NPR / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "planet-money": ["Planet Money"]
    },
    parents: {}
});
