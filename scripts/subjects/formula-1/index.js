/**
 * Formula 1 — Sports subject package.
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
        id: "formula-1",
        name: "Formula 1",
        rootSlug: "formula-1",
        theme: "formula-1",
        categories: ["sports"],
        copyright: {
            title: "Formula 1 is not owned by Ton-o-Lore.",
            body:
                "Formula 1, related names, marks, and materials are the property of Formula One Group / FIA / respective teams and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "formula-1": ["Formula 1"]
    },
    parents: {}
});
