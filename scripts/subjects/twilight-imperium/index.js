/**
 * Twilight Imperium — Tabletop subject package.
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
        id: "twilight-imperium",
        name: "Twilight Imperium",
        rootSlug: "twilight-imperium",
        theme: "twilight-imperium",
        categories: ["tabletop"],
        copyright: {
            title: "Twilight Imperium is not owned by Ton-o-Lore.",
            body:
                "Twilight Imperium, related names, marks, and materials are the property of Fantasy Flight / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "twilight-imperium": ["Twilight Imperium"]
    },
    parents: {}
});
