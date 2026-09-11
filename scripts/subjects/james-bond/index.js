/**
 * James Bond subject package — Ian Fleming's 007 spy franchise.
 */

const path = require("path");
const {
    entities: rawEntities,
    relationships: rawRelationships
} = require("./data");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");

module.exports = mergeSubjectPackage({
    subjectDir: path.join(__dirname),
    meta: {
        id: "james-bond",
        name: "James Bond",
        rootSlug: "james-bond",
        theme: "james-bond",
        copyright: {
            title: "James Bond is not owned by Ton-o-Lore.",
            body:
                "James Bond, 007, and related names, characters, and imagery are the property of their respective rights holders, including Ian Fleming Publications Ltd., Danjaq LLC, Eon Productions, Metro-Goldwyn-Mayer, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "james-bond": ["007 franchise", "Bond", "Bond series"],
        "ian-fleming": ["Fleming"],
        "eon-productions": ["Eon", "EON"],
        "albert-r-broccoli": ["Cubby Broccoli", "Cubby", "Albert Broccoli"],
        "bond-007": ["007", "James Bond", "Bond, James Bond"],
        m: ["M", "Olivia Mansfield", "Admiral Roebuck"],
        q: ["Q", "Major Boothroyd", "Quartermaster"],
        moneypenny: ["Miss Moneypenny", "Eve Moneypenny"],
        blofeld: ["Ernst Stavro Blofeld", "Number 1"],
        "goldfinger-character": ["Goldfinger", "Auric Goldfinger"],
        oddjob: ["Odd Job"],
        "felix-leiter": ["Leiter", "Felix"],
        jaws: ["Jaws"],
        "sean-connery": ["Connery"],
        "daniel-craig": ["Craig"],
        "roger-moore": ["Moore"],
        mi6: ["SIS", "Secret Intelligence Service", "Universal Exports"],
        spectre: ["S.P.E.C.T.R.E.", "Spectre"],
        "double-o": ["00", "Double-O", "00 agent"],
        "aston-martin": ["DB5", "Aston Martin DB5"],
        "walther-ppk": ["PPK", "Walther"],
        "licence-to-kill": ["License to kill", "Licence to Kill"],
        "casino-royale": ["Casino Royale"],
        "dr-no": ["Dr No", "Doctor No"],
        "goldfinger-film": ["Goldfinger film", "Goldfinger (film)"],
        skyfall: ["Skyfall"],
        "from-russia-with-love": ["FRWL", "From Russia With Love"],
        "no-time-to-die": ["NTTD"],
        thunderball: ["Thunderball"],
        "bond-theme": ["007 Theme", "James Bond Theme"]
    },
    parents: {
        "bond-007": "mi6",
        m: "mi6",
        q: "mi6",
        moneypenny: "mi6",
        blofeld: "spectre",
        oddjob: "goldfinger-character",
        "goldfinger-character": "goldfinger-film",
        jaws: "james-bond",
        "felix-leiter": "bond-007",
        "sean-connery": "dr-no",
        "daniel-craig": "casino-royale",
        "roger-moore": "james-bond",
        "double-o": "mi6",
        "licence-to-kill": "double-o",
        "aston-martin": "bond-007",
        "walther-ppk": "bond-007",
        "dr-no": "james-bond",
        "casino-royale": "james-bond",
        skyfall: "james-bond",
        "albert-r-broccoli": "eon-productions"
    }
});
