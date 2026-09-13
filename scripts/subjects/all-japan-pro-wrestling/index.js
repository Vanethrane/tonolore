/**
 * All Japan Pro Wrestling — Pro wrestling subject package.
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
        id: "all-japan-pro-wrestling",
        name: "All Japan Pro Wrestling",
        rootSlug: "all-japan-pro-wrestling",
        theme: "all-japan-pro-wrestling",
        categories: ["wrestling"],
        copyright: {
            title: "All Japan Pro Wrestling is not owned by Ton-o-Lore.",
            body:
                "All Japan Pro Wrestling, related names, marks, and materials are the property of AJPW / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "all-japan-pro-wrestling": ["All Japan Pro Wrestling"]
    },
    parents: {}
});
