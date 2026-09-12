/**
 * Witchcraft & witch trials — Occult & esoterica subject package.
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
        id: "witchcraft-witch-trials",
        name: "Witchcraft & witch trials",
        rootSlug: "witchcraft-witch-trials",
        theme: "witchcraft-witch-trials",
        categories: ["occult"],
        copyright: {
            title: "Witchcraft & witch trials is not owned by Ton-o-Lore.",
            body:
                "Witchcraft & witch trials, related names, marks, and materials are the property of Public historical and folklore record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "witchcraft-witch-trials": ["Witchcraft & witch trials"]
    },
    parents: {}
});
