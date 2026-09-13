/**
 * South Park — Western animation subject package.
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
        id: "south-park",
        name: "South Park",
        rootSlug: "south-park",
        theme: "south-park",
        categories: ["western-animation"],
        copyright: {
            title: "South Park is not owned by Ton-o-Lore.",
            body:
                "South Park, related names, marks, and materials are the property of Comedy Central / Paramount / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "south-park": ["South Park"]
    },
    parents: {}
});
