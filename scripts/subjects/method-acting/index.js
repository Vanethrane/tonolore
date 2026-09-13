/**
 * Method acting — Theater & musicals subject package.
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
        id: "method-acting",
        name: "Method acting",
        rootSlug: "method-acting",
        theme: "method-acting",
        categories: ["theater"],
        copyright: {
            title: "Method acting is not owned by Ton-o-Lore.",
            body:
                "Method acting, related names, marks, and materials are the property of Public theatre history / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "method-acting": ["Method acting"]
    },
    parents: {}
});
