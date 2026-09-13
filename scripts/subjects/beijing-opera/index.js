/**
 * Beijing opera — Theater & musicals subject package.
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
        id: "beijing-opera",
        name: "Beijing opera",
        rootSlug: "beijing-opera",
        theme: "beijing-opera",
        categories: ["theater"],
        copyright: {
            title: "Beijing opera is not owned by Ton-o-Lore.",
            body:
                "Beijing opera, related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "beijing-opera": ["Beijing opera"]
    },
    parents: {}
});
