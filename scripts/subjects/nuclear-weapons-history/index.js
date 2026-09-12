/**
 * Nuclear weapons & nuclear history — Military & fortresses subject package.
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
        id: "nuclear-weapons-history",
        name: "Nuclear weapons & nuclear history",
        rootSlug: "nuclear-weapons-history",
        theme: "nuclear-weapons-history",
        categories: ["military"],
        copyright: {
            title: "Nuclear weapons & nuclear history is not owned by Ton-o-Lore.",
            body:
                "Nuclear weapons & nuclear history, related names, marks, and materials are the property of Public historical and technical record / respective governments and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "nuclear-weapons-history": ["Nuclear weapons & nuclear history"]
    },
    parents: {}
});
