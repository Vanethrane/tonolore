/**
 * It (Stephen King) — Horror subject package.
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
        id: "it-stephen-king",
        name: "It (Stephen King)",
        rootSlug: "it-stephen-king",
        theme: "it-stephen-king",
        categories: ["horror"],
        copyright: {
            title: "It (Stephen King) is not owned by Ton-o-Lore.",
            body:
                "It (Stephen King), related names, marks, and materials are the property of King estate / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "it-stephen-king": ["It (Stephen King)"]
    },
    parents: {}
});
