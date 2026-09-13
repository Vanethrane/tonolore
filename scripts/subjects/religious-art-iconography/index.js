/**
 * Religious art & iconography — Religion & belief subject package.
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
        id: "religious-art-iconography",
        name: "Religious art & iconography",
        rootSlug: "religious-art-iconography",
        theme: "religious-art-iconography",
        categories: ["religion"],
        copyright: {
            title: "Religious art & iconography is not owned by Ton-o-Lore.",
            body:
                "Religious art & iconography, related names, marks, and materials are the property of Public art history / respective traditions. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "religious-art-iconography": ["Religious art & iconography"]
    },
    parents: {}
});
