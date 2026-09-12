/**
 * Boxing — Combat sports subject package.
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
        id: "boxing",
        name: "Boxing",
        rootSlug: "boxing",
        theme: "boxing",
        categories: ["sports"],
        sportsSport: "combat-sports",
        copyright: {
            title: "Boxing is not owned by Ton-o-Lore.",
            body:
                "Boxing, related names, marks, and materials are the property of Respective promoters, sanctioning bodies, and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "boxing": ["Boxing"]
    },
    parents: {}
});
