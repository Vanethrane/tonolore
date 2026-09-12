/**
 * The American Presidency — History subject package.
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
        id: "american-presidency",
        name: "The American Presidency",
        rootSlug: "american-presidency",
        theme: "american-presidency",
        categories: ["history"],
        copyright: {
            title: "The American Presidency is not owned by Ton-o-Lore.",
            body:
                "The American Presidency, related names, marks, and materials are the property of Public historical and governmental record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "american-presidency": ["The American Presidency"]
    },
    parents: {}
});
