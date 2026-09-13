/**
 * Arkham Horror Files — Tabletop subject package.
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
        id: "arkham-horror-files",
        name: "Arkham Horror Files",
        rootSlug: "arkham-horror-files",
        theme: "arkham-horror-files",
        categories: ["tabletop"],
        copyright: {
            title: "Arkham Horror Files is not owned by Ton-o-Lore.",
            body:
                "Arkham Horror Files, related names, marks, and materials are the property of Fantasy Flight / Chaosium / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "arkham-horror-files": ["Arkham Horror Files"]
    },
    parents: {}
});
