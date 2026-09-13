/**
 * Grand Theft Auto — Video games subject package.
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
        id: "grand-theft-auto",
        name: "Grand Theft Auto",
        rootSlug: "grand-theft-auto",
        theme: "grand-theft-auto",
        categories: ["video-games"],
        copyright: {
            title: "Grand Theft Auto is not owned by Ton-o-Lore.",
            body:
                "Grand Theft Auto, related names, marks, and materials are the property of Rockstar / Take-Two / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "grand-theft-auto": ["Grand Theft Auto"]
    },
    parents: {}
});
