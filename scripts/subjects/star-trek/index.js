/**
 * Star Trek — Science fiction subject package.
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
        id: "star-trek",
        name: "Star Trek",
        rootSlug: "star-trek",
        theme: "star-trek",
        categories: ["sci-fi"],
        copyright: {
            title: "Star Trek is not owned by Ton-o-Lore.",
            body:
                "Star Trek, related names, marks, and materials are the property of Paramount / CBS / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "star-trek": ["Trek", "Star Trek franchise"],
        "gene-roddenberry": ["Roddenberry", "The Great Bird of the Galaxy"],
        "william-shatner": ["Shatner"],
        "leonard-nimoy": ["Nimoy"],
        "star-trek-tos": ["TOS", "The Original Series", "Star Trek TOS"],
        "star-trek-tng": ["TNG", "The Next Generation", "Star Trek TNG"],
        "star-trek-voyager": ["Voyager", "Star Trek Voyager", "VOY"],
        "star-trek-first-contact": ["First Contact", "Star Trek VIII"],
        "united-federation-of-planets": ["Federation", "UFP", "the Federation"],
        starfleet: ["Star Fleet"],
        "enterprise-crew": ["TOS crew", "Kirk's crew"],
        "enterprise-d-crew": ["TNG crew", "Picard's crew"],
        "voyager-crew": ["Janeway's crew"],
        "klingon-empire": ["Klingons", "the Klingons"],
        "borg-collective": ["Borg", "the Borg", "the Collective"],
        "romulan-star-empire": ["Romulans", "the Romulans"],
        "uss-enterprise": ["Enterprise", "NCC-1701"],
        "uss-voyager": ["Voyager ship", "NCC-74656"],
        vulcan: ["Vulcan (planet)"],
        earth: ["Terra", "Sol III"],
        "james-t-kirk": ["Kirk", "Captain Kirk", "Jim Kirk"],
        spock: ["Mr. Spock"],
        "nyota-uhura": ["Uhura", "Lieutenant Uhura"],
        "leonard-mccoy": ["McCoy", "Bones", "Dr. McCoy"],
        "montgomery-scott": ["Scotty", "Scott"],
        "jean-luc-picard": ["Picard", "Captain Picard"],
        data: ["Lt. Commander Data"],
        worf: ["Lieutenant Worf"],
        "kathryn-janeway": ["Janeway", "Captain Janeway"],
        "seven-of-nine": ["Seven", "Annika Hansen"],
        "prime-directive": ["General Order 1", "non-interference"],
        "locutus-of-borg": ["Locutus"],
        "warp-drive": ["warp", "faster than light"]
    },
    parents: {
        "james-t-kirk": "enterprise-crew",
        spock: "enterprise-crew",
        "nyota-uhura": "enterprise-crew",
        "leonard-mccoy": "enterprise-crew",
        "montgomery-scott": "enterprise-crew",
        "jean-luc-picard": "enterprise-d-crew",
        data: "enterprise-d-crew",
        worf: "enterprise-d-crew",
        "kathryn-janeway": "voyager-crew",
        "seven-of-nine": "voyager-crew",
        "enterprise-crew": "starfleet",
        "enterprise-d-crew": "starfleet",
        "voyager-crew": "starfleet",
        starfleet: "united-federation-of-planets",
        "uss-enterprise": "starfleet",
        "uss-voyager": "starfleet",
        "locutus-of-borg": "borg-collective",
        "star-trek-tos": "star-trek",
        "star-trek-tng": "star-trek",
        "star-trek-voyager": "star-trek",
        "star-trek-first-contact": "star-trek"
    }
});
