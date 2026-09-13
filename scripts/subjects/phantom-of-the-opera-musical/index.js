/**
 * The Phantom of the Opera — Theater & musicals subject package.
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
        id: "phantom-of-the-opera-musical",
        name: "The Phantom of the Opera",
        rootSlug: "phantom-of-the-opera-musical",
        theme: "phantom-of-the-opera-musical",
        categories: ["theater"],
        copyright: {
            title: "The Phantom of the Opera is not owned by Ton-o-Lore.",
            body:
                "The Phantom of the Opera, related names, marks, and materials are the property of Really Useful Group / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "phantom-of-the-opera-musical": ["The Phantom of the Opera"]
    },
    parents: {}
});
