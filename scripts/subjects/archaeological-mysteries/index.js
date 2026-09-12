/**
 * Archaeological mysteries — Unexplained subject package.
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
        id: "archaeological-mysteries",
        name: "Archaeological mysteries",
        rootSlug: "archaeological-mysteries",
        theme: "archaeological-mysteries",
        categories: ["unexplained"],
        copyright: {
            title: "Archaeological mysteries is not owned by Ton-o-Lore.",
            body:
                "Archaeological mysteries, related names, marks, and materials are the property of Public archaeological record / respective institutions and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "archaeological-mysteries": ["Archaeological mysteries"]
    },
    parents: {}
});
