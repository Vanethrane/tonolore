/**
 * My Hero Academia — Anime subject package.
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
        id: "my-hero-academia",
        name: "My Hero Academia",
        rootSlug: "my-hero-academia",
        theme: "my-hero-academia",
        categories: ["anime"],
        copyright: {
            title: "My Hero Academia is not owned by Ton-o-Lore.",
            body:
                "My Hero Academia, related names, marks, and materials are the property of Shueisha / Bones / Viz / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "my-hero-academia": ["My Hero Academia"]
    },
    parents: {}
});
