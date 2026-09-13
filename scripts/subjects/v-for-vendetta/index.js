/**
 * V for Vendetta — Comics & manga subject package.
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
        id: "v-for-vendetta",
        name: "V for Vendetta",
        rootSlug: "v-for-vendetta",
        theme: "v-for-vendetta",
        categories: ["comics"],
        copyright: {
            title: "V for Vendetta is not owned by Ton-o-Lore.",
            body:
                "V for Vendetta, related names, marks, and materials are the property of DC / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "v-for-vendetta": ["V for Vendetta"]
    },
    parents: {}
});
