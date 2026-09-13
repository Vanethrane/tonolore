/**
 * Flash games era — Internet culture subject package.
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
        id: "flash-games-era",
        name: "Flash games era",
        rootSlug: "flash-games-era",
        theme: "flash-games-era",
        categories: ["internet-culture"],
        copyright: {
            title: "Flash games era is not owned by Ton-o-Lore.",
            body:
                "Flash games era, related names, marks, and materials are the property of Public web history / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "flash-games-era": ["Flash games era"]
    },
    parents: {}
});
