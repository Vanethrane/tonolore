/**
 * NASA — Science & nature subject package.
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
        id: "nasa",
        name: "NASA",
        rootSlug: "nasa",
        theme: "nasa",
        categories: ["science-nature"],
        copyright: {
            title: "NASA is not owned by Ton-o-Lore.",
            body:
                "NASA, related names, marks, and materials are the property of NASA / U.S. government works / respective partners. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "nasa": ["NASA"]
    },
    parents: {}
});
