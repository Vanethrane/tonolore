/**
 * College World Series — Baseball subject package.
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
        id: "college-world-series",
        name: "College World Series",
        rootSlug: "college-world-series",
        theme: "college-world-series",
        categories: ["sports"],
        sportsSport: "baseball",
        copyright: {
            title: "College World Series is not owned by Ton-o-Lore.",
            body:
                "College World Series, related names, marks, and materials are the property of NCAA / respective schools and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "college-world-series": ["College World Series"]
    },
    parents: {}
});
