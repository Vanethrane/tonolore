/**
 * Hank Williams — Country subject package.
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
        id: "hank-williams",
        name: "Hank Williams",
        rootSlug: "hank-williams",
        theme: "hank-williams",
        categories: ["music"],
        musicGenre: "country",
        copyright: {
            title: "Hank Williams is not owned by Ton-o-Lore.",
            body:
                "Hank Williams, related names, logos, recordings, and imagery are the property of Estate of Hank Williams / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "hank-williams": ["Hank Williams"]
    },
    parents: {}
});
