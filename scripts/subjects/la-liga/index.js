/**
 * La Liga — Soccer subject package.
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
        id: "la-liga",
        name: "La Liga",
        rootSlug: "la-liga",
        theme: "la-liga",
        categories: ["sports"],
        sportsSport: "soccer",
        copyright: {
            title: "La Liga is not owned by Ton-o-Lore.",
            body:
                "La Liga, related names, marks, and materials are the property of Liga Nacional de Fútbol Profesional / respective clubs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "la-liga": ["La Liga"]
    },
    parents: {}
});
