/**
 * Judo — Combat sports subject package.
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
        id: "judo",
        name: "Judo",
        rootSlug: "judo",
        theme: "judo",
        categories: ["sports"],
        sportsSport: "combat-sports",
        copyright: {
            title: "Judo is not owned by Ton-o-Lore.",
            body:
                "Judo, related names, marks, and materials are the property of IJF / Kodokan / respective federations and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "judo": ["Judo"]
    },
    parents: {}
});
