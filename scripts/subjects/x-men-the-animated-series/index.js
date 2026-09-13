/**
 * X-Men: The Animated Series — Western animation subject package.
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
        id: "x-men-the-animated-series",
        name: "X-Men: The Animated Series",
        rootSlug: "x-men-the-animated-series",
        theme: "x-men-the-animated-series",
        categories: ["western-animation"],
        copyright: {
            title: "X-Men: The Animated Series is not owned by Ton-o-Lore.",
            body:
                "X-Men: The Animated Series, related names, marks, and materials are the property of Marvel / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "x-men-the-animated-series": ["X-Men: The Animated Series"]
    },
    parents: {}
});
