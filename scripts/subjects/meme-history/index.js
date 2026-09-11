/**
 * Meme history — Internet culture subject package.
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
        id: "meme-history",
        name: "Meme history",
        rootSlug: "meme-history",
        theme: "meme-history",
        categories: ["internet-culture"],
        copyright: {
            title: "Meme history is not owned by Ton-o-Lore.",
            body:
                "Meme history, related names, marks, and materials are the property of Public internet culture / respective creators and platforms. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "meme-history": ["Meme history"]
    },
    parents: {}
});
