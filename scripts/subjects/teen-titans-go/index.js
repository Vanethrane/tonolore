/**
 * Teen Titans Go! — Western animation subject package.
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
        id: "teen-titans-go",
        name: "Teen Titans Go!",
        rootSlug: "teen-titans-go",
        theme: "teen-titans-go",
        categories: ["western-animation"],
        copyright: {
            title: "Teen Titans Go! is not owned by Ton-o-Lore.",
            body:
                "Teen Titans Go!, related names, marks, and materials are the property of Warner Bros. / Cartoon Network / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "teen-titans-go": ["Teen Titans Go!"]
    },
    parents: {}
});
