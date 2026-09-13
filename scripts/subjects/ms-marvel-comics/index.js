/**
 * Ms. Marvel — Comics & manga subject package.
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
        id: "ms-marvel-comics",
        name: "Ms. Marvel",
        rootSlug: "ms-marvel-comics",
        theme: "ms-marvel-comics",
        categories: ["comics"],
        copyright: {
            title: "Ms. Marvel is not owned by Ton-o-Lore.",
            body:
                "Ms. Marvel, related names, marks, and materials are the property of Marvel / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ms-marvel-comics": ["Ms. Marvel"]
    },
    parents: {}
});
