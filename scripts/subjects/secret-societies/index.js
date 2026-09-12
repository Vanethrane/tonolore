/**
 * Secret societies — Unexplained subject package.
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
        id: "secret-societies",
        name: "Secret societies",
        rootSlug: "secret-societies",
        theme: "secret-societies",
        categories: ["unexplained"],
        copyright: {
            title: "Secret societies is not owned by Ton-o-Lore.",
            body:
                "Secret societies, related names, marks, and materials are the property of Public historical record and scholarship / respective organizations and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "secret-societies": ["Secret societies"]
    },
    parents: {}
});
