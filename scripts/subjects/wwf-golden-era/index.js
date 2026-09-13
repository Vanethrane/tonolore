/**
 * WWF Golden Era — Pro wrestling subject package.
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
        id: "wwf-golden-era",
        name: "WWF Golden Era",
        rootSlug: "wwf-golden-era",
        theme: "wwf-golden-era",
        categories: ["wrestling"],
        copyright: {
            title: "WWF Golden Era is not owned by Ton-o-Lore.",
            body:
                "WWF Golden Era, related names, marks, and materials are the property of WWE / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "wwf-golden-era": ["WWF Golden Era"]
    },
    parents: {}
});
