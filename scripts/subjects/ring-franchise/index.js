/**
 * The Ring / Ringu — Horror subject package.
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
        id: "ring-franchise",
        name: "The Ring / Ringu",
        rootSlug: "ring-franchise",
        theme: "ring-franchise",
        categories: ["horror"],
        copyright: {
            title: "The Ring / Ringu is not owned by Ton-o-Lore.",
            body:
                "The Ring / Ringu, related names, marks, and materials are the property of Toho / DreamWorks / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ring-franchise": ["The Ring / Ringu"]
    },
    parents: {}
});
