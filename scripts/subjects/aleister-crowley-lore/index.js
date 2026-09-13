/**
 * Aleister Crowley lore — Occult & esoterica subject package.
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
        id: "aleister-crowley-lore",
        name: "Aleister Crowley lore",
        rootSlug: "aleister-crowley-lore",
        theme: "aleister-crowley-lore",
        categories: ["occult"],
        copyright: {
            title: "Aleister Crowley lore is not owned by Ton-o-Lore.",
            body:
                "Aleister Crowley lore, related names, marks, and materials are the property of Crowley estate / public record / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "aleister-crowley-lore": ["Aleister Crowley lore"]
    },
    parents: {}
});
