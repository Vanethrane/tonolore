/**
 * WoW internet culture — Internet culture subject package.
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
        id: "world-of-warcraft-culture",
        name: "WoW internet culture",
        rootSlug: "world-of-warcraft-culture",
        theme: "world-of-warcraft-culture",
        categories: ["internet-culture"],
        copyright: {
            title: "WoW internet culture is not owned by Ton-o-Lore.",
            body:
                "WoW internet culture, related names, marks, and materials are the property of Blizzard / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "world-of-warcraft-culture": ["WoW internet culture"]
    },
    parents: {}
});
