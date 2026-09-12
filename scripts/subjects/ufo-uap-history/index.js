/**
 * UFO / UAP history — Unexplained subject package.
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
        id: "ufo-uap-history",
        name: "UFO / UAP history",
        rootSlug: "ufo-uap-history",
        theme: "ufo-uap-history",
        categories: ["unexplained"],
        copyright: {
            title: "UFO / UAP history is not owned by Ton-o-Lore.",
            body:
                "UFO / UAP history, related names, marks, and materials are the property of Public record, journalism, and respective witnesses / agencies / rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ufo-uap-history": ["UFO / UAP history"]
    },
    parents: {}
});
