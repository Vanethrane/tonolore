/**
 * Sherlock Holmes canon — Books & literature subject package.
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
        id: "sherlock-holmes-canon",
        name: "Sherlock Holmes canon",
        rootSlug: "sherlock-holmes-canon",
        theme: "sherlock-holmes-canon",
        categories: ["books"],
        copyright: {
            title: "Sherlock Holmes canon is not owned by Ton-o-Lore.",
            body:
                "Sherlock Holmes canon, related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "sherlock-holmes-canon": ["Sherlock Holmes canon"]
    },
    parents: {}
});
