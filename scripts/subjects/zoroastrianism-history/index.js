/**
 * Zoroastrianism history — Religion & belief subject package.
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
        id: "zoroastrianism-history",
        name: "Zoroastrianism history",
        rootSlug: "zoroastrianism-history",
        theme: "zoroastrianism-history",
        categories: ["religion"],
        copyright: {
            title: "Zoroastrianism history is not owned by Ton-o-Lore.",
            body:
                "Zoroastrianism history, related names, marks, and materials are the property of Public historical and theological record / respective communities. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "zoroastrianism-history": ["Zoroastrianism history"]
    },
    parents: {}
});
