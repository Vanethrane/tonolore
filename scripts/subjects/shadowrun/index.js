/**
 * Shadowrun — Tabletop subject package.
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
        id: "shadowrun",
        name: "Shadowrun",
        rootSlug: "shadowrun",
        theme: "shadowrun",
        categories: ["tabletop"],
        copyright: {
            title: "Shadowrun is not owned by Ton-o-Lore.",
            body:
                "Shadowrun, related names, marks, and materials are the property of Catalyst Game Labs / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "shadowrun": ["Shadowrun"]
    },
    parents: {}
});
