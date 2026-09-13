/**
 * Fantasy Strike — Fighting games subject package.
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
        id: "fantasy-strike",
        name: "Fantasy Strike",
        rootSlug: "fantasy-strike",
        theme: "fantasy-strike",
        categories: ["fighting-games"],
        copyright: {
            title: "Fantasy Strike is not owned by Ton-o-Lore.",
            body:
                "Fantasy Strike, related names, marks, and materials are the property of Sirlin Games / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "fantasy-strike": ["Fantasy Strike"]
    },
    parents: {}
});
