/**
 * Calvin and Hobbes — Comics & manga subject package.
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
        id: "calvin-and-hobbes",
        name: "Calvin and Hobbes",
        rootSlug: "calvin-and-hobbes",
        theme: "calvin-and-hobbes",
        categories: ["comics"],
        copyright: {
            title: "Calvin and Hobbes is not owned by Ton-o-Lore.",
            body:
                "Calvin and Hobbes, related names, marks, and materials are the property of Watterson / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "calvin-and-hobbes": ["Calvin and Hobbes"]
    },
    parents: {}
});
