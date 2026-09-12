/**
 * Reddit — Internet culture subject package.
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
        id: "reddit",
        name: "Reddit",
        rootSlug: "reddit",
        theme: "reddit",
        categories: ["internet-culture"],
        copyright: {
            title: "Reddit is not owned by Ton-o-Lore.",
            body:
                "Reddit, related names, marks, and materials are the property of Reddit, Inc. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "reddit": ["Reddit"]
    },
    parents: {}
});
