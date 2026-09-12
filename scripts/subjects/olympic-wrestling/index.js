/**
 * Olympic wrestling — Combat sports subject package.
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
        id: "olympic-wrestling",
        name: "Olympic wrestling",
        rootSlug: "olympic-wrestling",
        theme: "olympic-wrestling",
        categories: ["sports"],
        sportsSport: "combat-sports",
        copyright: {
            title: "Olympic wrestling is not owned by Ton-o-Lore.",
            body:
                "Olympic wrestling, related names, marks, and materials are the property of UWW / IOC / respective federations and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "olympic-wrestling": ["Olympic wrestling"]
    },
    parents: {}
});
