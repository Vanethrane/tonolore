/**
 * Dracula lore — Horror subject package.
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
        id: "dracula-lore",
        name: "Dracula lore",
        rootSlug: "dracula-lore",
        theme: "dracula-lore",
        categories: ["horror"],
        copyright: {
            title: "Dracula lore is not owned by Ton-o-Lore.",
            body:
                "Dracula lore, related names, marks, and materials are the property of Public-domain Stoker text / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dracula-lore": ["Dracula lore"]
    },
    parents: {}
});
