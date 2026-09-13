/**
 * Magic: The Gathering Arena — Card games subject package.
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
        id: "magic-arena",
        name: "Magic: The Gathering Arena",
        rootSlug: "magic-arena",
        theme: "magic-arena",
        categories: ["card-games"],
        copyright: {
            title: "Magic: The Gathering Arena is not owned by Ton-o-Lore.",
            body:
                "Magic: The Gathering Arena, related names, marks, and materials are the property of Wizards of the Coast / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "magic-arena": ["Magic: The Gathering Arena"]
    },
    parents: {}
});
