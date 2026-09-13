/**
 * Beyblade — Toys & collectibles subject package.
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
        id: "beyblade",
        name: "Beyblade",
        rootSlug: "beyblade",
        theme: "beyblade",
        categories: ["toys"],
        copyright: {
            title: "Beyblade is not owned by Ton-o-Lore.",
            body:
                "Beyblade, related names, marks, and materials are the property of Takara Tomy / Hasbro / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "beyblade": ["Beyblade"]
    },
    parents: {}
});
