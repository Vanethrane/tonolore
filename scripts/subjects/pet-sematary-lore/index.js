/**
 * Pet Sematary — Horror subject package.
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
        id: "pet-sematary-lore",
        name: "Pet Sematary",
        rootSlug: "pet-sematary-lore",
        theme: "pet-sematary-lore",
        categories: ["horror"],
        copyright: {
            title: "Pet Sematary is not owned by Ton-o-Lore.",
            body:
                "Pet Sematary, related names, marks, and materials are the property of King estate / Paramount / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "pet-sematary-lore": ["Pet Sematary"]
    },
    parents: {}
});
