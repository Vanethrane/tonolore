/**
 * My Little Pony — Toys & collectibles subject package.
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
        id: "my-little-pony",
        name: "My Little Pony",
        rootSlug: "my-little-pony",
        theme: "my-little-pony",
        categories: ["toys"],
        copyright: {
            title: "My Little Pony is not owned by Ton-o-Lore.",
            body:
                "My Little Pony, related names, marks, and materials are the property of Hasbro / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "my-little-pony": ["My Little Pony"]
    },
    parents: {}
});
