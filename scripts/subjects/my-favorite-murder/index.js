/**
 * My Favorite Murder — Podcasts & audio subject package.
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
        id: "my-favorite-murder",
        name: "My Favorite Murder",
        rootSlug: "my-favorite-murder",
        theme: "my-favorite-murder",
        categories: ["podcasts"],
        copyright: {
            title: "My Favorite Murder is not owned by Ton-o-Lore.",
            body:
                "My Favorite Murder, related names, marks, and materials are the property of Exactly Right / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "my-favorite-murder": ["My Favorite Murder"]
    },
    parents: {}
});
