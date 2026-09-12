/**
 * Paralympic Games — Olympics & multi-sport subject package.
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
        id: "paralympic-games",
        name: "Paralympic Games",
        rootSlug: "paralympic-games",
        theme: "paralympic-games",
        categories: ["sports"],
        sportsSport: "olympics-multi",
        copyright: {
            title: "Paralympic Games is not owned by Ton-o-Lore.",
            body:
                "Paralympic Games, related names, marks, and materials are the property of IPC / respective NPCs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "paralympic-games": ["Paralympic Games"]
    },
    parents: {}
});
