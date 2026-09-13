/**
 * Hermetic Order of the Golden Dawn — Occult & esoterica subject package.
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
        id: "golden-dawn",
        name: "Hermetic Order of the Golden Dawn",
        rootSlug: "golden-dawn",
        theme: "golden-dawn",
        categories: ["occult"],
        copyright: {
            title: "Hermetic Order of the Golden Dawn is not owned by Ton-o-Lore.",
            body:
                "Hermetic Order of the Golden Dawn, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "golden-dawn": ["Hermetic Order of the Golden Dawn"]
    },
    parents: {}
});
