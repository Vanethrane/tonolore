/**
 * Dark Souls — Video games subject package.
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
        id: "dark-souls",
        name: "Dark Souls",
        rootSlug: "dark-souls",
        theme: "dark-souls",
        categories: ["video-games"],
        copyright: {
            title: "Dark Souls is not owned by Ton-o-Lore.",
            body:
                "Dark Souls, related names, marks, and materials are the property of FromSoftware / Bandai Namco / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dark-souls": ["Dark Souls"]
    },
    parents: {}
});
