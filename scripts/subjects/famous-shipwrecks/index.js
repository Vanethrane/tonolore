/**
 * Famous shipwrecks — Maritime subject package.
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
        id: "famous-shipwrecks",
        name: "Famous shipwrecks",
        rootSlug: "famous-shipwrecks",
        theme: "famous-shipwrecks",
        categories: ["maritime"],
        copyright: {
            title: "Famous shipwrecks is not owned by Ton-o-Lore.",
            body:
                "Famous shipwrecks, related names, marks, and materials are the property of Public historical and nautical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "famous-shipwrecks": ["Famous shipwrecks"]
    },
    parents: {}
});
