/**
 * Nineteen Eighty-Four — Books & literature subject package.
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
        id: "1984-orwell",
        name: "Nineteen Eighty-Four",
        rootSlug: "1984-orwell",
        theme: "1984-orwell",
        categories: ["books"],
        copyright: {
            title: "Nineteen Eighty-Four is not owned by Ton-o-Lore.",
            body:
                "Nineteen Eighty-Four, related names, marks, and materials are the property of Orwell estate / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "1984-orwell": ["Nineteen Eighty-Four"]
    },
    parents: {}
});
