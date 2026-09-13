/**
 * The Joe Rogan Experience — Podcasts & audio subject package.
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
        id: "the-joe-rogan-experience",
        name: "The Joe Rogan Experience",
        rootSlug: "the-joe-rogan-experience",
        theme: "the-joe-rogan-experience",
        categories: ["podcasts"],
        copyright: {
            title: "The Joe Rogan Experience is not owned by Ton-o-Lore.",
            body:
                "The Joe Rogan Experience, related names, marks, and materials are the property of Spotify / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-joe-rogan-experience": ["The Joe Rogan Experience"]
    },
    parents: {}
});
