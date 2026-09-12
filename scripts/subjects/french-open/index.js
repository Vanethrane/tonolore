/**
 * French Open — Tennis subject package.
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
        id: "french-open",
        name: "French Open",
        rootSlug: "french-open",
        theme: "french-open",
        categories: ["sports"],
        sportsSport: "tennis",
        copyright: {
            title: "French Open is not owned by Ton-o-Lore.",
            body:
                "French Open, related names, marks, and materials are the property of FFT / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "french-open": ["French Open"]
    },
    parents: {}
});
