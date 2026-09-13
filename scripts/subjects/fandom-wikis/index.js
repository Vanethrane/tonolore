/**
 * Fandom wikis — Internet culture subject package.
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
        id: "fandom-wikis",
        name: "Fandom wikis",
        rootSlug: "fandom-wikis",
        theme: "fandom-wikis",
        categories: ["internet-culture"],
        copyright: {
            title: "Fandom wikis is not owned by Ton-o-Lore.",
            body:
                "Fandom wikis, related names, marks, and materials are the property of Fandom, Inc. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "fandom-wikis": ["Fandom wikis"]
    },
    parents: {}
});
