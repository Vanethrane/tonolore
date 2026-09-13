/**
 * My Brother, My Brother and Me — Podcasts & audio subject package.
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
        id: "mbmbam",
        name: "My Brother, My Brother and Me",
        rootSlug: "mbmbam",
        theme: "mbmbam",
        categories: ["podcasts"],
        copyright: {
            title: "My Brother, My Brother and Me is not owned by Ton-o-Lore.",
            body:
                "My Brother, My Brother and Me, related names, marks, and materials are the property of Maximum Fun / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "mbmbam": ["My Brother, My Brother and Me"]
    },
    parents: {}
});
