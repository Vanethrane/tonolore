/**
 * Ghost ships — Maritime subject package.
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
        id: "ghost-ships",
        name: "Ghost ships",
        rootSlug: "ghost-ships",
        theme: "ghost-ships",
        categories: ["maritime"],
        copyright: {
            title: "Ghost ships is not owned by Ton-o-Lore.",
            body:
                "Ghost ships, related names, marks, and materials are the property of Public historical and maritime record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ghost-ships": ["Ghost ships"]
    },
    parents: {}
});
