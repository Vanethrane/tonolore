/**
 * Dolly Parton — Country subject package.
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
        id: "dolly-parton",
        name: "Dolly Parton",
        rootSlug: "dolly-parton",
        theme: "dolly-parton",
        categories: ["music"],
        musicGenre: "country",
        copyright: {
            title: "Dolly Parton is not owned by Ton-o-Lore.",
            body:
                "Dolly Parton, related names, logos, recordings, and imagery are the property of Dolly Parton / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dolly-parton": ["Dolly Parton"]
    },
    parents: {}
});
