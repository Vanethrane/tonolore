/**
 * Conan O'Brien Needs a Friend — Podcasts & audio subject package.
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
        id: "conan-obrien-needs-a-friend",
        name: "Conan O'Brien Needs a Friend",
        rootSlug: "conan-obrien-needs-a-friend",
        theme: "conan-obrien-needs-a-friend",
        categories: ["podcasts"],
        copyright: {
            title: "Conan O'Brien Needs a Friend is not owned by Ton-o-Lore.",
            body:
                "Conan O'Brien Needs a Friend, related names, marks, and materials are the property of Team Coco / SiriusXM / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "conan-obrien-needs-a-friend": ["Conan O'Brien Needs a Friend"]
    },
    parents: {}
});
