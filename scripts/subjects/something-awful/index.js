/**
 * Something Awful — Internet culture subject package.
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
        id: "something-awful",
        name: "Something Awful",
        rootSlug: "something-awful",
        theme: "something-awful",
        categories: ["internet-culture"],
        copyright: {
            title: "Something Awful is not owned by Ton-o-Lore.",
            body:
                "Something Awful, related names, marks, and materials are the property of Something Awful / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "something-awful": ["Something Awful"]
    },
    parents: {}
});
