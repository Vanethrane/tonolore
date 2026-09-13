/**
 * Powered by the Apocalypse — Tabletop subject package.
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
        id: "powered-by-the-apocalypse",
        name: "Powered by the Apocalypse",
        rootSlug: "powered-by-the-apocalypse",
        theme: "powered-by-the-apocalypse",
        categories: ["tabletop"],
        copyright: {
            title: "Powered by the Apocalypse is not owned by Ton-o-Lore.",
            body:
                "Powered by the Apocalypse, related names, marks, and materials are the property of Apocalypse World / respective designers. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "powered-by-the-apocalypse": ["Powered by the Apocalypse"]
    },
    parents: {}
});
