/**
 * Aphex Twin — Electronic subject package.
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
        id: "aphex-twin",
        name: "Aphex Twin",
        rootSlug: "aphex-twin",
        theme: "aphex-twin",
        categories: ["music"],
        musicGenre: "electronic",
        copyright: {
            title: "Aphex Twin is not owned by Ton-o-Lore.",
            body:
                "Aphex Twin, related names, logos, recordings, and imagery are the property of Richard D. James / Warp Records / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "aphex-twin": ["Aphex Twin"]
    },
    parents: {}
});
