/**
 * Broadway — Theater & musicals subject package.
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
        id: "broadway",
        name: "Broadway",
        rootSlug: "broadway",
        theme: "broadway",
        categories: ["theater"],
        copyright: {
            title: "Broadway is not owned by Ton-o-Lore.",
            body:
                "Broadway, related names, marks, and materials are the property of Respective producers, leagues, and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "broadway": ["Broadway"]
    },
    parents: {}
});
