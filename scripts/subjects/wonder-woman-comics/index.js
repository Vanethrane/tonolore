/**
 * Wonder Woman — Comics & manga subject package.
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
        id: "wonder-woman-comics",
        name: "Wonder Woman",
        rootSlug: "wonder-woman-comics",
        theme: "wonder-woman-comics",
        categories: ["comics"],
        copyright: {
            title: "Wonder Woman is not owned by Ton-o-Lore.",
            body:
                "Wonder Woman, related names, marks, and materials are the property of DC / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "wonder-woman-comics": ["Wonder Woman"]
    },
    parents: {}
});
