/**
 * 2004 Indian Ocean tsunami — Disasters & catastrophes subject package.
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
        id: "indian-ocean-tsunami",
        name: "2004 Indian Ocean tsunami",
        rootSlug: "indian-ocean-tsunami",
        theme: "indian-ocean-tsunami",
        categories: ["disasters"],
        copyright: {
            title: "2004 Indian Ocean tsunami is not owned by Ton-o-Lore.",
            body:
                "2004 Indian Ocean tsunami, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "indian-ocean-tsunami": ["2004 Indian Ocean tsunami"]
    },
    parents: {}
});
