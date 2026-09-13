/**
 * Twilight films — Movies subject package.
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
        id: "twilight-films",
        name: "Twilight films",
        rootSlug: "twilight-films",
        theme: "twilight-films",
        categories: ["movies"],
        copyright: {
            title: "Twilight films is not owned by Ton-o-Lore.",
            body:
                "Twilight films, related names, marks, and materials are the property of Summit / Lionsgate / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "twilight-films": ["Twilight films"]
    },
    parents: {}
});
