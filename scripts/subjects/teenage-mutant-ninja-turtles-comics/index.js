/**
 * TMNT (comics) — Comics & manga subject package.
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
        id: "teenage-mutant-ninja-turtles-comics",
        name: "TMNT (comics)",
        rootSlug: "teenage-mutant-ninja-turtles-comics",
        theme: "teenage-mutant-ninja-turtles-comics",
        categories: ["comics"],
        copyright: {
            title: "TMNT (comics) is not owned by Ton-o-Lore.",
            body:
                "TMNT (comics), related names, marks, and materials are the property of IDW / Mirage / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "teenage-mutant-ninja-turtles-comics": ["TMNT (comics)"]
    },
    parents: {}
});
