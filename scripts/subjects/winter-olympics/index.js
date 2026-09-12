/**
 * Winter Olympics — Olympics & multi-sport subject package.
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
        id: "winter-olympics",
        name: "Winter Olympics",
        rootSlug: "winter-olympics",
        theme: "winter-olympics",
        categories: ["sports"],
        sportsSport: "olympics-multi",
        copyright: {
            title: "Winter Olympics is not owned by Ton-o-Lore.",
            body:
                "Winter Olympics, related names, marks, and materials are the property of IOC / respective NOCs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "winter-olympics": ["Winter Olympics"]
    },
    parents: {}
});
