/**
 * Capcom vs. SNK — Fighting games subject package.
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
        id: "capcom-vs-snk",
        name: "Capcom vs. SNK",
        rootSlug: "capcom-vs-snk",
        theme: "capcom-vs-snk",
        categories: ["fighting-games"],
        copyright: {
            title: "Capcom vs. SNK is not owned by Ton-o-Lore.",
            body:
                "Capcom vs. SNK, related names, marks, and materials are the property of Capcom / SNK / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "capcom-vs-snk": ["Capcom vs. SNK"]
    },
    parents: {}
});
