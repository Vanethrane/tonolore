/**
 * Viking Age — History subject package.
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
        id: "viking-age",
        name: "Viking Age",
        rootSlug: "viking-age",
        theme: "viking-age",
        categories: ["history"],
        copyright: {
            title: "Viking Age is not owned by Ton-o-Lore.",
            body:
                "Viking Age, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "viking-age": ["Viking Age"]
    },
    parents: {}
});
