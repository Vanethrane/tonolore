/**
 * Dyatlov Pass incident — Unexplained subject package.
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
        id: "dyatlov-pass",
        name: "Dyatlov Pass incident",
        rootSlug: "dyatlov-pass",
        theme: "dyatlov-pass",
        categories: ["unexplained"],
        copyright: {
            title: "Dyatlov Pass incident is not owned by Ton-o-Lore.",
            body:
                "Dyatlov Pass incident, related names, marks, and materials are the property of Public historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dyatlov-pass": ["Dyatlov Pass incident"]
    },
    parents: {}
});
