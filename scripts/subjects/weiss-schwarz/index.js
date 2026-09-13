/**
 * Weiss Schwarz — Card games subject package.
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
        id: "weiss-schwarz",
        name: "Weiss Schwarz",
        rootSlug: "weiss-schwarz",
        theme: "weiss-schwarz",
        categories: ["card-games"],
        copyright: {
            title: "Weiss Schwarz is not owned by Ton-o-Lore.",
            body:
                "Weiss Schwarz, related names, marks, and materials are the property of Bushiroad / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "weiss-schwarz": ["Weiss Schwarz"]
    },
    parents: {}
});
