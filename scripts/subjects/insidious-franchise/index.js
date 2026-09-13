/**
 * Insidious — Horror subject package.
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
        id: "insidious-franchise",
        name: "Insidious",
        rootSlug: "insidious-franchise",
        theme: "insidious-franchise",
        categories: ["horror"],
        copyright: {
            title: "Insidious is not owned by Ton-o-Lore.",
            body:
                "Insidious, related names, marks, and materials are the property of Sony / Blumhouse / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "insidious-franchise": ["Insidious"]
    },
    parents: {}
});
