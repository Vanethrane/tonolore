/**
 * Easter Island moai — Unexplained subject package.
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
        id: "easter-island-moai",
        name: "Easter Island moai",
        rootSlug: "easter-island-moai",
        theme: "easter-island-moai",
        categories: ["unexplained"],
        copyright: {
            title: "Easter Island moai is not owned by Ton-o-Lore.",
            body:
                "Easter Island moai, related names, marks, and materials are the property of Public archaeological record / Rapa Nui rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "easter-island-moai": ["Easter Island moai"]
    },
    parents: {}
});
