/**
 * Oak Island mystery — Unexplained subject package.
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
        id: "oak-island-mystery",
        name: "Oak Island mystery",
        rootSlug: "oak-island-mystery",
        theme: "oak-island-mystery",
        categories: ["unexplained"],
        copyright: {
            title: "Oak Island mystery is not owned by Ton-o-Lore.",
            body:
                "Oak Island mystery, related names, marks, and materials are the property of Public / media rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "oak-island-mystery": ["Oak Island mystery"]
    },
    parents: {}
});
