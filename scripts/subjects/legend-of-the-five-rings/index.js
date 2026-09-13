/**
 * Legend of the Five Rings — Tabletop subject package.
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
        id: "legend-of-the-five-rings",
        name: "Legend of the Five Rings",
        rootSlug: "legend-of-the-five-rings",
        theme: "legend-of-the-five-rings",
        categories: ["tabletop"],
        copyright: {
            title: "Legend of the Five Rings is not owned by Ton-o-Lore.",
            body:
                "Legend of the Five Rings, related names, marks, and materials are the property of Fantasy Flight / Edge / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "legend-of-the-five-rings": ["Legend of the Five Rings"]
    },
    parents: {}
});
