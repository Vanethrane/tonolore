/**
 * Rent — Theater & musicals subject package.
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
        id: "rent-musical",
        name: "Rent",
        rootSlug: "rent-musical",
        theme: "rent-musical",
        categories: ["theater"],
        copyright: {
            title: "Rent is not owned by Ton-o-Lore.",
            body:
                "Rent, related names, marks, and materials are the property of ABD / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "rent-musical": ["Rent"]
    },
    parents: {}
});
