/**
 * Transformers (toys) — Toys & collectibles subject package.
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
        id: "transformers-toys",
        name: "Transformers (toys)",
        rootSlug: "transformers-toys",
        theme: "transformers-toys",
        categories: ["toys"],
        copyright: {
            title: "Transformers (toys) is not owned by Ton-o-Lore.",
            body:
                "Transformers (toys), related names, marks, and materials are the property of Hasbro / Takara Tomy / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "transformers-toys": ["Transformers (toys)"]
    },
    parents: {}
});
