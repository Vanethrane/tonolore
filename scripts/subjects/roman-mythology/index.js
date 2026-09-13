/**
 * Roman mythology — Mythology subject package.
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
        id: "roman-mythology",
        name: "Roman mythology",
        rootSlug: "roman-mythology",
        theme: "roman-mythology",
        categories: ["mythology"],
        copyright: {
            title: "Roman mythology is not owned by Ton-o-Lore.",
            body:
                "Roman mythology, related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "roman-mythology": ["Roman mythology"]
    },
    parents: {}
});
