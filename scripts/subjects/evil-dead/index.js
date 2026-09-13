/**
 * Evil Dead — Horror subject package.
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
        id: "evil-dead",
        name: "Evil Dead",
        rootSlug: "evil-dead",
        theme: "evil-dead",
        categories: ["horror"],
        copyright: {
            title: "Evil Dead is not owned by Ton-o-Lore.",
            body:
                "Evil Dead, related names, marks, and materials are the property of Renaissance / Sony / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "evil-dead": ["Evil Dead"]
    },
    parents: {}
});
