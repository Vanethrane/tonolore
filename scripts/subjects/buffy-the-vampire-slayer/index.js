/**
 * Buffy the Vampire Slayer — Television subject package.
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
        id: "buffy-the-vampire-slayer",
        name: "Buffy the Vampire Slayer",
        rootSlug: "buffy-the-vampire-slayer",
        theme: "buffy-the-vampire-slayer",
        categories: ["television"],
        copyright: {
            title: "Buffy the Vampire Slayer is not owned by Ton-o-Lore.",
            body:
                "Buffy the Vampire Slayer, related names, marks, and materials are the property of Mutant Enemy / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "buffy-the-vampire-slayer": ["Buffy the Vampire Slayer"]
    },
    parents: {}
});
