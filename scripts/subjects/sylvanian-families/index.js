/**
 * Sylvanian Families / Calico Critters — Toys & collectibles subject package.
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
        id: "sylvanian-families",
        name: "Sylvanian Families / Calico Critters",
        rootSlug: "sylvanian-families",
        theme: "sylvanian-families",
        categories: ["toys"],
        copyright: {
            title: "Sylvanian Families / Calico Critters is not owned by Ton-o-Lore.",
            body:
                "Sylvanian Families / Calico Critters, related names, marks, and materials are the property of Epoch / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "sylvanian-families": ["Sylvanian Families / Calico Critters"]
    },
    parents: {}
});
