/**
 * Journey to the West — Folklore & legend subject package.
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
        id: "journey-to-the-west",
        name: "Journey to the West",
        rootSlug: "journey-to-the-west",
        theme: "journey-to-the-west",
        categories: ["folklore"],
        copyright: {
            title: "Journey to the West is not owned by Ton-o-Lore.",
            body:
                "Journey to the West, related names, marks, and materials are the property of Public-domain classic / respective modern adaptations and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "journey-to-the-west": ["Journey to the West"]
    },
    parents: {}
});
