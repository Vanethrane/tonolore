/**
 * Opera — Theater & musicals subject package.
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
        id: "opera",
        name: "Opera",
        rootSlug: "opera",
        theme: "opera",
        categories: ["theater"],
        copyright: {
            title: "Opera is not owned by Ton-o-Lore.",
            body:
                "Opera, related names, marks, and materials are the property of Public-domain repertoire / respective houses and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "opera": ["Opera"]
    },
    parents: {}
});
