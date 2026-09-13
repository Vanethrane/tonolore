/**
 * Byzantine Empire — History subject package.
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
        id: "byzantine-empire",
        name: "Byzantine Empire",
        rootSlug: "byzantine-empire",
        theme: "byzantine-empire",
        categories: ["history"],
        copyright: {
            title: "Byzantine Empire is not owned by Ton-o-Lore.",
            body:
                "Byzantine Empire, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "byzantine-empire": ["Byzantine Empire"]
    },
    parents: {}
});
