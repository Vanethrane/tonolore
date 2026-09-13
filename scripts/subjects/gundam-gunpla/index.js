/**
 * Gundam Gunpla — Toys & collectibles subject package.
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
        id: "gundam-gunpla",
        name: "Gundam Gunpla",
        rootSlug: "gundam-gunpla",
        theme: "gundam-gunpla",
        categories: ["toys"],
        copyright: {
            title: "Gundam Gunpla is not owned by Ton-o-Lore.",
            body:
                "Gundam Gunpla, related names, marks, and materials are the property of Bandai / Sunrise / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "gundam-gunpla": ["Gundam Gunpla"]
    },
    parents: {}
});
