/**
 * Star Wars: Unlimited — Card games subject package.
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
        id: "star-wars-unlimited",
        name: "Star Wars: Unlimited",
        rootSlug: "star-wars-unlimited",
        theme: "star-wars-unlimited",
        categories: ["card-games"],
        copyright: {
            title: "Star Wars: Unlimited is not owned by Ton-o-Lore.",
            body:
                "Star Wars: Unlimited, related names, marks, and materials are the property of Fantasy Flight / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "star-wars-unlimited": ["Star Wars: Unlimited"]
    },
    parents: {}
});
