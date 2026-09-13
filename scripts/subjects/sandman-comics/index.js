/**
 * The Sandman — Comics & manga subject package.
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
        id: "sandman-comics",
        name: "The Sandman",
        rootSlug: "sandman-comics",
        theme: "sandman-comics",
        categories: ["comics"],
        copyright: {
            title: "The Sandman is not owned by Ton-o-Lore.",
            body:
                "The Sandman, related names, marks, and materials are the property of DC/Vertigo / Netflix / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "sandman-comics": ["The Sandman"]
    },
    parents: {}
});
