/**
 * Australian Open — Tennis subject package.
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
        id: "australian-open",
        name: "Australian Open",
        rootSlug: "australian-open",
        theme: "australian-open",
        categories: ["sports"],
        sportsSport: "tennis",
        copyright: {
            title: "Australian Open is not owned by Ton-o-Lore.",
            body:
                "Australian Open, related names, marks, and materials are the property of Tennis Australia / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "australian-open": ["Australian Open"]
    },
    parents: {}
});
