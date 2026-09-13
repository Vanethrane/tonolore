/**
 * Dracula (novel) — Books & literature subject package.
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
        id: "dracula-novel",
        name: "Dracula (novel)",
        rootSlug: "dracula-novel",
        theme: "dracula-novel",
        categories: ["books"],
        copyright: {
            title: "Dracula (novel) is not owned by Ton-o-Lore.",
            body:
                "Dracula (novel), related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dracula-novel": ["Dracula (novel)"]
    },
    parents: {}
});
