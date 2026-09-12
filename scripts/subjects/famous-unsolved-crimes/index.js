/**
 * Famous unsolved crimes — Crime & underworld subject package.
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
        id: "famous-unsolved-crimes",
        name: "Famous unsolved crimes",
        rootSlug: "famous-unsolved-crimes",
        theme: "famous-unsolved-crimes",
        categories: ["crime"],
        copyright: {
            title: "Famous unsolved crimes is not owned by Ton-o-Lore.",
            body:
                "Famous unsolved crimes, related names, marks, and materials are the property of Public historical and legal record / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "famous-unsolved-crimes": ["Famous unsolved crimes"]
    },
    parents: {}
});
