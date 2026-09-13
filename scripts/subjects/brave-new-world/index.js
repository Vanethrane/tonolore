/**
 * Brave New World — Books & literature subject package.
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
        id: "brave-new-world",
        name: "Brave New World",
        rootSlug: "brave-new-world",
        theme: "brave-new-world",
        categories: ["books"],
        copyright: {
            title: "Brave New World is not owned by Ton-o-Lore.",
            body:
                "Brave New World, related names, marks, and materials are the property of Huxley estate / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "brave-new-world": ["Brave New World"]
    },
    parents: {}
});
