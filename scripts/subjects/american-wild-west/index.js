/**
 * The American Wild West — History subject package.
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
        id: "american-wild-west",
        name: "The American Wild West",
        rootSlug: "american-wild-west",
        theme: "american-wild-west",
        categories: ["history"],
        copyright: {
            title: "The American Wild West is not owned by Ton-o-Lore.",
            body:
                "The American Wild West, related names, marks, and materials are the property of Public-domain historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "american-wild-west": ["The American Wild West"]
    },
    parents: {}
});
