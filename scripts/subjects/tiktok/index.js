/**
 * TikTok — Internet culture subject package.
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
        id: "tiktok",
        name: "TikTok",
        rootSlug: "tiktok",
        theme: "tiktok",
        categories: ["internet-culture"],
        copyright: {
            title: "TikTok is not owned by Ton-o-Lore.",
            body:
                "TikTok, related names, marks, and materials are the property of ByteDance / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "tiktok": ["TikTok"]
    },
    parents: {}
});
