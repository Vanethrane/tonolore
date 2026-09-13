/**
 * Force of Will — Card games subject package.
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
        id: "force-of-will",
        name: "Force of Will",
        rootSlug: "force-of-will",
        theme: "force-of-will",
        categories: ["card-games"],
        copyright: {
            title: "Force of Will is not owned by Ton-o-Lore.",
            body:
                "Force of Will, related names, marks, and materials are the property of Force of Will Co. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "force-of-will": ["Force of Will"]
    },
    parents: {}
});
