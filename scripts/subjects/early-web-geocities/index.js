/**
 * GeoCities & early web — Internet culture subject package.
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
        id: "early-web-geocities",
        name: "GeoCities & early web",
        rootSlug: "early-web-geocities",
        theme: "early-web-geocities",
        categories: ["internet-culture"],
        copyright: {
            title: "GeoCities & early web is not owned by Ton-o-Lore.",
            body:
                "GeoCities & early web, related names, marks, and materials are the property of Public internet history / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "early-web-geocities": ["GeoCities & early web"]
    },
    parents: {}
});
