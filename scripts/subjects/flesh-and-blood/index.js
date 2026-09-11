/**
 * Flesh and Blood subject package.
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
        id: "flesh-and-blood",
        name: "Flesh and Blood",
        rootSlug: "flesh-and-blood",
        theme: "flesh-and-blood",
        categories: ["card-games"],
        copyright: {
            title: "Flesh and Blood is not owned by Ton-o-Lore.",
            body:
                "Flesh and Blood, related names, logos, and game materials are the property of Legend Story Studios / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "flesh-and-blood": ["Flesh and Blood"]
    },
    parents: {}
});
