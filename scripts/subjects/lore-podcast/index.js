/**
 * Lore (podcast) — Podcasts & audio subject package.
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
        id: "lore-podcast",
        name: "Lore (podcast)",
        rootSlug: "lore-podcast",
        theme: "lore-podcast",
        categories: ["podcasts"],
        copyright: {
            title: "Lore (podcast) is not owned by Ton-o-Lore.",
            body:
                "Lore (podcast), related names, marks, and materials are the property of Aaron Mahnke / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "lore-podcast": ["Lore (podcast)"]
    },
    parents: {}
});
