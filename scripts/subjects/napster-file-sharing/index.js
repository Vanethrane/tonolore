/**
 * Napster & file-sharing era — Internet culture subject package.
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
        id: "napster-file-sharing",
        name: "Napster & file-sharing era",
        rootSlug: "napster-file-sharing",
        theme: "napster-file-sharing",
        categories: ["internet-culture"],
        copyright: {
            title: "Napster & file-sharing era is not owned by Ton-o-Lore.",
            body:
                "Napster & file-sharing era, related names, marks, and materials are the property of Public tech history / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "napster-file-sharing": ["Napster & file-sharing era"]
    },
    parents: {}
});
