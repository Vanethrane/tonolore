/**
 * Sacred texts & canons — Religion & belief subject package.
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
        id: "sacred-texts-canon",
        name: "Sacred texts & canons",
        rootSlug: "sacred-texts-canon",
        theme: "sacred-texts-canon",
        categories: ["religion"],
        copyright: {
            title: "Sacred texts & canons is not owned by Ton-o-Lore.",
            body:
                "Sacred texts & canons, related names, marks, and materials are the property of Public religious history / respective communities. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "sacred-texts-canon": ["Sacred texts & canons"]
    },
    parents: {}
});
