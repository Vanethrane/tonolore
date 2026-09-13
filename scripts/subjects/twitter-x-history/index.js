/**
 * Twitter / X history — Internet culture subject package.
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
        id: "twitter-x-history",
        name: "Twitter / X history",
        rootSlug: "twitter-x-history",
        theme: "twitter-x-history",
        categories: ["internet-culture"],
        copyright: {
            title: "Twitter / X history is not owned by Ton-o-Lore.",
            body:
                "Twitter / X history, related names, marks, and materials are the property of X Corp. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "twitter-x-history": ["Twitter / X history"]
    },
    parents: {}
});
