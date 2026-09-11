/**
 * Iron Maiden — Metal subject package.
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
        id: "iron-maiden",
        name: "Iron Maiden",
        rootSlug: "iron-maiden",
        theme: "iron-maiden",
        categories: ["music"],
        musicGenre: "metal",
        copyright: {
            title: "Iron Maiden is not owned by Ton-o-Lore.",
            body:
                "Iron Maiden, related names, logos, recordings, and imagery are the property of Iron Maiden / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "iron-maiden": ["Iron Maiden"]
    },
    parents: {}
});
