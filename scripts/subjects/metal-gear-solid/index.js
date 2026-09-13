/**
 * Metal Gear Solid — Video games subject package.
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
        id: "metal-gear-solid",
        name: "Metal Gear Solid",
        rootSlug: "metal-gear-solid",
        theme: "metal-gear-solid",
        categories: ["video-games"],
        copyright: {
            title: "Metal Gear Solid is not owned by Ton-o-Lore.",
            body:
                "Metal Gear Solid, related names, marks, and materials are the property of Konami / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "metal-gear-solid": ["Metal Gear Solid"]
    },
    parents: {}
});
