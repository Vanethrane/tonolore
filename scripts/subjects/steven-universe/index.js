/**
 * Steven Universe — Western animation subject package.
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
        id: "steven-universe",
        name: "Steven Universe",
        rootSlug: "steven-universe",
        theme: "steven-universe",
        categories: ["western-animation"],
        copyright: {
            title: "Steven Universe is not owned by Ton-o-Lore.",
            body:
                "Steven Universe, related names, marks, and materials are the property of Cartoon Network / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "steven-universe": ["Steven Universe"]
    },
    parents: {}
});
