/**
 * Beanie Babies — Toys & collectibles subject package.
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
        id: "beanie-babies",
        name: "Beanie Babies",
        rootSlug: "beanie-babies",
        theme: "beanie-babies",
        categories: ["toys"],
        copyright: {
            title: "Beanie Babies is not owned by Ton-o-Lore.",
            body:
                "Beanie Babies, related names, marks, and materials are the property of Ty Inc. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "beanie-babies": ["Beanie Babies"]
    },
    parents: {}
});
