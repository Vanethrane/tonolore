/**
 * Fast & Furious — Movies subject package.
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
        id: "fast-and-furious",
        name: "Fast & Furious",
        rootSlug: "fast-and-furious",
        theme: "fast-and-furious",
        categories: ["movies"],
        copyright: {
            title: "Fast & Furious is not owned by Ton-o-Lore.",
            body:
                "Fast & Furious, related names, marks, and materials are the property of Universal / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "fast-and-furious": ["Fast & Furious"]
    },
    parents: {}
});
