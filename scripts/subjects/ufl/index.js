/**
 * United Football League — American football subject package.
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
        id: "ufl",
        name: "United Football League",
        rootSlug: "ufl",
        theme: "ufl",
        categories: ["sports"],
        sportsSport: "american-football",
        copyright: {
            title: "United Football League is not owned by Ton-o-Lore.",
            body:
                "United Football League, related names, marks, and materials are the property of UFL / respective clubs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ufl": ["United Football League"]
    },
    parents: {}
});
