/**
 * Avatar: The Last Airbender — Western animation subject package.
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
        id: "avatar-the-last-airbender",
        name: "Avatar: The Last Airbender",
        rootSlug: "avatar-the-last-airbender",
        theme: "avatar-the-last-airbender",
        categories: ["western-animation"],
        copyright: {
            title: "Avatar: The Last Airbender is not owned by Ton-o-Lore.",
            body:
                "Avatar: The Last Airbender, related names, marks, and materials are the property of Nickelodeon / Paramount / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "avatar-the-last-airbender": ["Avatar: The Last Airbender"]
    },
    parents: {}
});
