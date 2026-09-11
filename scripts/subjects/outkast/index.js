/**
 * OutKast — Hip-hop subject package.
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
        id: "outkast",
        name: "OutKast",
        rootSlug: "outkast",
        theme: "outkast",
        categories: ["music"],
        musicGenre: "hip-hop",
        copyright: {
            title: "OutKast is not owned by Ton-o-Lore.",
            body:
                "OutKast, related names, logos, recordings, and imagery are the property of OutKast / LaFace / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "outkast": ["OutKast"]
    },
    parents: {}
});
