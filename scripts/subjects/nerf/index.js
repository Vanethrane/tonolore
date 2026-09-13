/**
 * Nerf — Toys & collectibles subject package.
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
        id: "nerf",
        name: "Nerf",
        rootSlug: "nerf",
        theme: "nerf",
        categories: ["toys"],
        copyright: {
            title: "Nerf is not owned by Ton-o-Lore.",
            body:
                "Nerf, related names, marks, and materials are the property of Hasbro / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "nerf": ["Nerf"]
    },
    parents: {}
});
