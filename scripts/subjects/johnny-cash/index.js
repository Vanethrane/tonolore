/**
 * Johnny Cash — Country subject package.
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
        id: "johnny-cash",
        name: "Johnny Cash",
        rootSlug: "johnny-cash",
        theme: "johnny-cash",
        categories: ["music"],
        musicGenre: "country",
        copyright: {
            title: "Johnny Cash is not owned by Ton-o-Lore.",
            body:
                "Johnny Cash, related names, logos, recordings, and imagery are the property of Estate of Johnny Cash / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "johnny-cash": ["Johnny Cash"]
    },
    parents: {}
});
