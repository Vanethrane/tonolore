/**
 * 1906 San Francisco earthquake — Disasters & catastrophes subject package.
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
        id: "san-francisco-earthquake",
        name: "1906 San Francisco earthquake",
        rootSlug: "san-francisco-earthquake",
        theme: "san-francisco-earthquake",
        categories: ["disasters"],
        copyright: {
            title: "1906 San Francisco earthquake is not owned by Ton-o-Lore.",
            body:
                "1906 San Francisco earthquake, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "san-francisco-earthquake": ["1906 San Francisco earthquake"]
    },
    parents: {}
});
