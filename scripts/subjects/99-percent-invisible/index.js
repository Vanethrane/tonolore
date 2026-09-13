/**
 * 99% Invisible — Podcasts & audio subject package.
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
        id: "99-percent-invisible",
        name: "99% Invisible",
        rootSlug: "99-percent-invisible",
        theme: "99-percent-invisible",
        categories: ["podcasts"],
        copyright: {
            title: "99% Invisible is not owned by Ton-o-Lore.",
            body:
                "99% Invisible, related names, marks, and materials are the property of Roman Mars / SiriusXM / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "99-percent-invisible": ["99% Invisible"]
    },
    parents: {}
});
