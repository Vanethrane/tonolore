/**
 * Fukushima Daiichi — Disasters & catastrophes subject package.
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
        id: "fukushima-daiichi",
        name: "Fukushima Daiichi",
        rootSlug: "fukushima-daiichi",
        theme: "fukushima-daiichi",
        categories: ["disasters"],
        copyright: {
            title: "Fukushima Daiichi is not owned by Ton-o-Lore.",
            body:
                "Fukushima Daiichi, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "fukushima-daiichi": ["Fukushima Daiichi"]
    },
    parents: {}
});
