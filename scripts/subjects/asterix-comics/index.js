/**
 * Asterix — Comics & manga subject package.
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
        id: "asterix-comics",
        name: "Asterix",
        rootSlug: "asterix-comics",
        theme: "asterix-comics",
        categories: ["comics"],
        copyright: {
            title: "Asterix is not owned by Ton-o-Lore.",
            body:
                "Asterix, related names, marks, and materials are the property of Hachette / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "asterix-comics": ["Asterix"]
    },
    parents: {}
});
