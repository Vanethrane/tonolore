/**
 * The Wire — Television subject package.
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
        id: "the-wire",
        name: "The Wire",
        rootSlug: "the-wire",
        theme: "the-wire",
        categories: ["television"],
        copyright: {
            title: "The Wire is not owned by Ton-o-Lore.",
            body:
                "The Wire, related names, marks, and materials are the property of HBO / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-wire": ["The Wire"]
    },
    parents: {}
});
