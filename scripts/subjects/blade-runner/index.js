/**
 * Blade Runner — Science fiction subject package.
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
        id: "blade-runner",
        name: "Blade Runner",
        rootSlug: "blade-runner",
        theme: "blade-runner",
        categories: ["sci-fi"],
        copyright: {
            title: "Blade Runner is not owned by Ton-o-Lore.",
            body:
                "Blade Runner, related names, marks, and materials are the property of Warner Bros. / Alcon / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "blade-runner": ["Blade Runner"]
    },
    parents: {}
});
