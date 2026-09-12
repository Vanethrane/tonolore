/**
 * Folklore & urban legends — Folklore & legend subject package.
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
        id: "folklore-urban-legends",
        name: "Folklore & urban legends",
        rootSlug: "folklore-urban-legends",
        theme: "folklore-urban-legends",
        categories: ["folklore"],
        copyright: {
            title: "Folklore & urban legends is not owned by Ton-o-Lore.",
            body:
                "Folklore & urban legends, related names, marks, and materials are the property of Public-domain folklore traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "folklore-urban-legends": ["Folklore & urban legends"]
    },
    parents: {}
});
