/**
 * BoJack Horseman — Western animation subject package.
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
        id: "bojack-horseman",
        name: "BoJack Horseman",
        rootSlug: "bojack-horseman",
        theme: "bojack-horseman",
        categories: ["western-animation"],
        copyright: {
            title: "BoJack Horseman is not owned by Ton-o-Lore.",
            body:
                "BoJack Horseman, related names, marks, and materials are the property of Netflix / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "bojack-horseman": ["BoJack Horseman"]
    },
    parents: {}
});
