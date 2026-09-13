/**
 * Warhammer Age of Sigmar — Tabletop subject package.
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
        id: "warhammer-age-of-sigmar",
        name: "Warhammer Age of Sigmar",
        rootSlug: "warhammer-age-of-sigmar",
        theme: "warhammer-age-of-sigmar",
        categories: ["tabletop"],
        copyright: {
            title: "Warhammer Age of Sigmar is not owned by Ton-o-Lore.",
            body:
                "Warhammer Age of Sigmar, related names, marks, and materials are the property of Games Workshop / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "warhammer-age-of-sigmar": ["Warhammer Age of Sigmar"]
    },
    parents: {}
});
