/**
 * WWE — Pro wrestling subject package.
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
        id: "wwe",
        name: "WWE",
        rootSlug: "wwe",
        theme: "wwe",
        categories: ["wrestling"],
        copyright: {
            title: "WWE is not owned by Ton-o-Lore.",
            body:
                "WWE, related names, marks, and materials are the property of WWE / TKO / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        wwe: ["WWE", "WWF", "World Wrestling Entertainment", "WWWF"],
        "vince-mcmahon": ["Vince", "Vincent Kennedy McMahon", "Mr. McMahon"],
        "triple-h": ["Triple H", "The Game", "Paul Levesque", "Hunter Hearst Helmsley"],
        "hulk-hogan": ["Hogan", "Hollywood Hogan", "Hulkamania"],
        undertaker: ["The Undertaker", "Deadman", "The Phenom", "American Badass"],
        "stone-cold-steve-austin": ["Stone Cold", "Steve Austin", "Austin 3:16", "The Rattlesnake"],
        "the-rock": ["The Rock", "Dwayne Johnson", "The People's Champion"],
        "john-cena": ["Cena", "John Cena"],
        "roman-reigns": ["Reigns", "Tribal Chief", "The Big Dog"],
        "becky-lynch": ["Becky", "The Man"],
        "rhea-ripley": ["Rhea", "Mami"],
        "shawn-michaels": ["HBK", "The Heartbreak Kid", "Shawn Michaels"],
        "bret-hart": ["Hitman", "The Excellence of Execution"],
        "the-bloodline": ["Bloodline", "The Bloodline (WWE)"],
        "judgment-day": ["The Judgment Day"],
        "degeneration-x": ["DX", "D-Generation X"],
        nwo: ["nWo", "New World Order", "New World Order (wrestling)"],
        "monday-night-raw": ["Raw", "Monday Night Raw", "WWE Raw"],
        "friday-night-smackdown": ["SmackDown", "Friday Night SmackDown", "WWE SmackDown"],
        wrestlemania: ["WrestleMania", "Mania"],
        summerslam: ["SummerSlam"],
        "royal-rumble": ["Royal Rumble", "Rumble"],
        "survivor-series": ["Survivor Series"],
        "monday-night-wars": ["Monday Night Wars", "MNW"],
        "madison-square-garden": ["MSG", "The Garden"],
        stamford: ["Stamford, Connecticut", "WWE headquarters"],
        "undisputed-wwe-championship": [
            "Undisputed Championship",
            "Undisputed WWE Universal Championship",
            "WWE Championship"
        ],
        "wwe-womens-championship": ["WWE Women's Championship", "Women's World Championship"],
        "intercontinental-championship": ["Intercontinental Title", "IC Title"],
        "attitude-era": ["Attitude Era", "WWF Attitude"]
    },
    parents: {
        "roman-reigns": "the-bloodline",
        "rhea-ripley": "judgment-day",
        "triple-h": "degeneration-x",
        "shawn-michaels": "degeneration-x",
        "hulk-hogan": "nwo"
    }
});
