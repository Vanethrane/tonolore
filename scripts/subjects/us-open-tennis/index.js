/**
 * US Open (tennis) — Tennis subject package.
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
        id: "us-open-tennis",
        name: "US Open (tennis)",
        rootSlug: "us-open-tennis",
        theme: "us-open-tennis",
        categories: ["sports"],
        sportsSport: "tennis",
        copyright: {
            title: "US Open (tennis) is not owned by Ton-o-Lore.",
            body:
                "US Open (tennis), related names, marks, and materials are the property of USTA / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "us-open-tennis": ["US Open (tennis)"]
    },
    parents: {}
});
