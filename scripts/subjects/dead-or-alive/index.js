/**
 * Dead or Alive — Fighting games subject package.
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
        id: "dead-or-alive",
        name: "Dead or Alive",
        rootSlug: "dead-or-alive",
        theme: "dead-or-alive",
        categories: ["fighting-games"],
        copyright: {
            title: "Dead or Alive is not owned by Ton-o-Lore.",
            body:
                "Dead or Alive, related names, marks, and materials are the property of Koei Tecmo / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dead-or-alive": ["Dead or Alive"]
    },
    parents: {}
});
