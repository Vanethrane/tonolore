/**
 * Snow Crash — Science fiction subject package.
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
        id: "snow-crash-lore",
        name: "Snow Crash",
        rootSlug: "snow-crash-lore",
        theme: "snow-crash-lore",
        categories: ["sci-fi"],
        copyright: {
            title: "Snow Crash is not owned by Ton-o-Lore.",
            body:
                "Snow Crash, related names, marks, and materials are the property of Stephenson / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "snow-crash-lore": ["Snow Crash"]
    },
    parents: {}
});
