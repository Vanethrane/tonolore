/**
 * Native American history & nations — History subject package.
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
        id: "native-american-history",
        name: "Native American history & nations",
        rootSlug: "native-american-history",
        theme: "native-american-history",
        categories: ["history"],
        copyright: {
            title: "Native American history & nations is not owned by Ton-o-Lore.",
            body:
                "Native American history & nations, related names, marks, and materials are the property of Public historical record / respective nations, tribes, and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "native-american-history": ["Native American history & nations"]
    },
    parents: {}
});
