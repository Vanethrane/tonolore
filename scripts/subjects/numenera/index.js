/**
 * Numenera — Tabletop subject package.
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
        id: "numenera",
        name: "Numenera",
        rootSlug: "numenera",
        theme: "numenera",
        categories: ["tabletop"],
        copyright: {
            title: "Numenera is not owned by Ton-o-Lore.",
            body:
                "Numenera, related names, marks, and materials are the property of Monte Cook Games / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "numenera": ["Numenera"]
    },
    parents: {}
});
