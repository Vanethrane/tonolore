/**
 * Native American folktales — Folklore & legend subject package.
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
        id: "native-american-folktales",
        name: "Native American folktales",
        rootSlug: "native-american-folktales",
        theme: "native-american-folktales",
        categories: ["folklore"],
        copyright: {
            title: "Native American folktales is not owned by Ton-o-Lore.",
            body:
                "Native American folktales, related names, marks, and materials are the property of Public tribal traditions / respective nations and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "native-american-folktales": ["Native American folktales"]
    },
    parents: {}
});
