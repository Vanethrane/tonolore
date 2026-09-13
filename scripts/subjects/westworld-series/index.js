/**
 * Westworld — Science fiction subject package.
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
        id: "westworld-series",
        name: "Westworld",
        rootSlug: "westworld-series",
        theme: "westworld-series",
        categories: ["sci-fi"],
        copyright: {
            title: "Westworld is not owned by Ton-o-Lore.",
            body:
                "Westworld, related names, marks, and materials are the property of HBO / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "westworld-series": ["Westworld"]
    },
    parents: {}
});
