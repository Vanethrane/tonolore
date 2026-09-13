/**
 * 4chan history — Internet culture subject package.
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
        id: "4chan-history",
        name: "4chan history",
        rootSlug: "4chan-history",
        theme: "4chan-history",
        categories: ["internet-culture"],
        copyright: {
            title: "4chan history is not owned by Ton-o-Lore.",
            body:
                "4chan history, related names, marks, and materials are the property of 4chan community history / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "4chan-history": ["4chan history"]
    },
    parents: {}
});
