/**
 * Polly Pocket — Toys & collectibles subject package.
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
        id: "polly-pocket",
        name: "Polly Pocket",
        rootSlug: "polly-pocket",
        theme: "polly-pocket",
        categories: ["toys"],
        copyright: {
            title: "Polly Pocket is not owned by Ton-o-Lore.",
            body:
                "Polly Pocket, related names, marks, and materials are the property of Mattel / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "polly-pocket": ["Polly Pocket"]
    },
    parents: {}
});
