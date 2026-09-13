/**
 * AI-generated meme culture — Internet culture subject package.
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
        id: "ai-generated-meme-culture",
        name: "AI-generated meme culture",
        rootSlug: "ai-generated-meme-culture",
        theme: "ai-generated-meme-culture",
        categories: ["internet-culture"],
        copyright: {
            title: "AI-generated meme culture is not owned by Ton-o-Lore.",
            body:
                "AI-generated meme culture, related names, marks, and materials are the property of Public internet culture / respective model providers. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ai-generated-meme-culture": ["AI-generated meme culture"]
    },
    parents: {}
});
