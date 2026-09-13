/**
 * The Hitchhiker's Guide to the Galaxy — Books & literature subject package.
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
        id: "hitchhikers-guide",
        name: "The Hitchhiker's Guide to the Galaxy",
        rootSlug: "hitchhikers-guide",
        theme: "hitchhikers-guide",
        categories: ["books"],
        copyright: {
            title: "The Hitchhiker's Guide to the Galaxy is not owned by Ton-o-Lore.",
            body:
                "The Hitchhiker's Guide to the Galaxy, related names, marks, and materials are the property of Adams estate / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "hitchhikers-guide": ["The Hitchhiker's Guide to the Galaxy"]
    },
    parents: {}
});
