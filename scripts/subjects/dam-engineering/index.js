/**
 * Dam engineering — Built environment subject package.
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
        id: "dam-engineering",
        name: "Dam engineering",
        rootSlug: "dam-engineering",
        theme: "dam-engineering",
        categories: ["built-environment"],
        copyright: {
            title: "Dam engineering is not owned by Ton-o-Lore.",
            body:
                "Dam engineering, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dam-engineering": ["Dam engineering"]
    },
    parents: {}
});
