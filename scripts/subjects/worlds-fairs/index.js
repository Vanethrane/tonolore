/**
 * World's fairs & expositions — Built environment subject package.
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
        id: "worlds-fairs",
        name: "World's fairs & expositions",
        rootSlug: "worlds-fairs",
        theme: "worlds-fairs",
        categories: ["built-environment"],
        copyright: {
            title: "World's fairs & expositions is not owned by Ton-o-Lore.",
            body:
                "World's fairs & expositions, related names, marks, and materials are the property of Public historical record / respective organizers and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "worlds-fairs": ["World's fairs & expositions"]
    },
    parents: {}
});
