/**
 * Broadway golden age — Theater & musicals subject package.
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
        id: "broadway-golden-age",
        name: "Broadway golden age",
        rootSlug: "broadway-golden-age",
        theme: "broadway-golden-age",
        categories: ["theater"],
        copyright: {
            title: "Broadway golden age is not owned by Ton-o-Lore.",
            body:
                "Broadway golden age, related names, marks, and materials are the property of Public theatre history / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "broadway-golden-age": ["Broadway golden age"]
    },
    parents: {}
});
