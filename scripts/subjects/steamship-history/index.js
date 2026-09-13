/**
 * Steamship history — Transport & machines subject package.
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
        id: "steamship-history",
        name: "Steamship history",
        rootSlug: "steamship-history",
        theme: "steamship-history",
        categories: ["transport"],
        copyright: {
            title: "Steamship history is not owned by Ton-o-Lore.",
            body:
                "Steamship history, related names, marks, and materials are the property of Public maritime and industrial history / respective companies and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "steamship-history": ["Steamship history"]
    },
    parents: {}
});
