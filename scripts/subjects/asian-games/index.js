/**
 * Asian Games — Olympics & multi-sport subject package.
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
        id: "asian-games",
        name: "Asian Games",
        rootSlug: "asian-games",
        theme: "asian-games",
        categories: ["sports"],
        sportsSport: "olympics-multi",
        copyright: {
            title: "Asian Games is not owned by Ton-o-Lore.",
            body:
                "Asian Games, related names, marks, and materials are the property of OCA / respective NOCs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "asian-games": ["Asian Games"]
    },
    parents: {}
});
