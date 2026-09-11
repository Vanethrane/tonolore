/**
 * Ticket to Ride subject package.
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
        id: "ticket-to-ride",
        name: "Ticket to Ride",
        rootSlug: "ticket-to-ride",
        theme: "ticket-to-ride",
        categories: ["tabletop"],
        copyright: {
            title: "Ticket to Ride is not owned by Ton-o-Lore.",
            body:
                "Ticket to Ride, related names, logos, and game materials are the property of Days of Wonder / Asmodee / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ticket-to-ride": ["Ticket to Ride"]
    },
    parents: {}
});
