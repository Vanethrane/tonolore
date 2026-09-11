/**
 * Yu-Gi-Oh! subject package.
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
        id: "yu-gi-oh",
        name: "Yu-Gi-Oh!",
        rootSlug: "yu-gi-oh",
        theme: "yu-gi-oh",
        categories: ["card-games"],
        copyright: {
            title: "Yu-Gi-Oh! is not owned by Ton-o-Lore.",
            body:
                "Yu-Gi-Oh!, related names, logos, and game materials are the property of Konami / Studio Dice / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "yu-gi-oh": ["Yu-Gi-Oh!"]
    },
    parents: {}
});
