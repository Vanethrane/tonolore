/**
 * To Kill a Mockingbird — Books & literature subject package.
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
        id: "to-kill-a-mockingbird",
        name: "To Kill a Mockingbird",
        rootSlug: "to-kill-a-mockingbird",
        theme: "to-kill-a-mockingbird",
        categories: ["books"],
        copyright: {
            title: "To Kill a Mockingbird is not owned by Ton-o-Lore.",
            body:
                "To Kill a Mockingbird, related names, marks, and materials are the property of Lee estate / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "to-kill-a-mockingbird": ["To Kill a Mockingbird"]
    },
    parents: {}
});
