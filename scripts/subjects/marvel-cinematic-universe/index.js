/**
 * Marvel Cinematic Universe — Movies subject package.
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
        id: "marvel-cinematic-universe",
        name: "Marvel Cinematic Universe",
        rootSlug: "marvel-cinematic-universe",
        theme: "marvel-cinematic-universe",
        categories: ["movies"],
        copyright: {
            title: "Marvel Cinematic Universe is not owned by Ton-o-Lore.",
            body:
                "Marvel Cinematic Universe, related names, marks, and materials are the property of Marvel / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "marvel-cinematic-universe": ["Marvel Cinematic Universe"]
    },
    parents: {}
});
