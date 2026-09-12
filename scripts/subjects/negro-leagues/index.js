/**
 * Negro Leagues — Baseball subject package.
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
        id: "negro-leagues",
        name: "Negro Leagues",
        rootSlug: "negro-leagues",
        theme: "negro-leagues",
        categories: ["sports"],
        sportsSport: "baseball",
        copyright: {
            title: "Negro Leagues is not owned by Ton-o-Lore.",
            body:
                "Negro Leagues, related names, marks, and materials are the property of Negro Leagues Baseball Museum / respective estates and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "negro-leagues": ["Negro Leagues"]
    },
    parents: {}
});
