/**
 * Modern pagan revival — Occult & esoterica subject package.
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
        id: "pagan-revival",
        name: "Modern pagan revival",
        rootSlug: "pagan-revival",
        theme: "pagan-revival",
        categories: ["occult"],
        copyright: {
            title: "Modern pagan revival is not owned by Ton-o-Lore.",
            body:
                "Modern pagan revival, related names, marks, and materials are the property of Public religious history / respective communities. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "pagan-revival": ["Modern pagan revival"]
    },
    parents: {}
});
