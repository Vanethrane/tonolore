/**
 * Friday the 13th — Horror subject package.
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
        id: "friday-the-13th",
        name: "Friday the 13th",
        rootSlug: "friday-the-13th",
        theme: "friday-the-13th",
        categories: ["horror"],
        copyright: {
            title: "Friday the 13th is not owned by Ton-o-Lore.",
            body:
                "Friday the 13th, related names, marks, and materials are the property of New Line / Paramount / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "friday-the-13th": ["Friday the 13th"]
    },
    parents: {}
});
