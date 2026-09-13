/**
 * The Lord of the Rings films — Movies subject package.
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
        id: "lord-of-the-rings-films",
        name: "The Lord of the Rings films",
        rootSlug: "lord-of-the-rings-films",
        theme: "lord-of-the-rings-films",
        categories: ["movies"],
        copyright: {
            title: "The Lord of the Rings films is not owned by Ton-o-Lore.",
            body:
                "The Lord of the Rings films, related names, marks, and materials are the property of New Line / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "lord-of-the-rings-films": ["The Lord of the Rings films"]
    },
    parents: {}
});
