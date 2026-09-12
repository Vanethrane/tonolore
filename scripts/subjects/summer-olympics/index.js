/**
 * Summer Olympics — Olympics & multi-sport subject package.
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
        id: "summer-olympics",
        name: "Summer Olympics",
        rootSlug: "summer-olympics",
        theme: "summer-olympics",
        categories: ["sports"],
        sportsSport: "olympics-multi",
        copyright: {
            title: "Summer Olympics is not owned by Ton-o-Lore.",
            body:
                "Summer Olympics, related names, marks, and materials are the property of IOC / respective NOCs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "summer-olympics": ["Summer Olympics"]
    },
    parents: {}
});
