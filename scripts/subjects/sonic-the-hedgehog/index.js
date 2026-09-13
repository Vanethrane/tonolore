/**
 * Sonic the Hedgehog — Video games subject package.
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
        id: "sonic-the-hedgehog",
        name: "Sonic the Hedgehog",
        rootSlug: "sonic-the-hedgehog",
        theme: "sonic-the-hedgehog",
        categories: ["video-games"],
        copyright: {
            title: "Sonic the Hedgehog is not owned by Ton-o-Lore.",
            body:
                "Sonic the Hedgehog, related names, marks, and materials are the property of Sega / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "sonic-the-hedgehog": ["Sonic the Hedgehog"]
    },
    parents: {}
});
