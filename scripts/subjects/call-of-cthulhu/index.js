/**
 * Call of Cthulhu subject package — Chaosium Mythos investigative horror RPG.
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
        id: "call-of-cthulhu",
        name: "Call of Cthulhu",
        rootSlug: "call-of-cthulhu",
        theme: "call-of-cthulhu",
        copyright: {
            title: "Call of Cthulhu is not owned by Ton-o-Lore.",
            body:
                "Call of Cthulhu, the Cthulhu Mythos, H. P. Lovecraft's works, their characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Chaosium Inc., the Lovecraft Estate, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "call-of-cthulhu": ["CoC", "Call of Cthulhu RPG", "Call of Cthulhu game"],
        chaosium: ["Chaosium Inc."],
        "sandy-petersen": ["Sandy Petersen", "Petersen"],
        "h-p-lovecraft": ["Lovecraft", "H.P. Lovecraft", "Howard Phillips Lovecraft"],
        "call-of-cthulhu-seventh-edition": ["CoC 7e", "7th Edition", "Call of Cthulhu 7e"],
        "basic-roleplaying": ["BRP", "Basic Role Playing"],
        investigator: ["Investigators", "CoC investigator"],
        keeper: ["Keeper of Arcane Lore", "CoC Keeper", "Game Master"],
        sanity: ["SAN", "Sanity points", "Sanity mechanic"],
        "mythos-tomes": ["Forbidden tomes", "Mythos books"],
        "lovecraft-mythos": ["Lovecraft Mythos", "Mythos", "Cthulhu Mythos lore"],
        "great-old-ones": ["Great Old One", "GOO"],
        "outer-gods": ["Outer God"],
        cthulhu: ["Great Cthulhu", "Cthulhu god"],
        nyarlathotep: ["Crawling Chaos", "Haunter of the Dark"],
        azathoth: ["Azathoth blind idiot god"],
        "yog-sothoth": ["Yog-Sothoth", "Lurker at the Threshold"],
        "shub-niggurath": ["Shub-Niggurath", "Black Goat of the Woods"],
        arkham: ["Arkham MA", "Arkham Massachusetts"],
        innsmouth: ["Innsmouth MA"],
        dunwich: ["Dunwich MA"],
        "miskatonic-university": ["Miskatonic U", "MU", "Miskatonic"],
        rlyeh: ["R'lyeh city", "Rlyeh"],
        antarctica: ["Antarctic expedition", "Mountains of Madness setting"],
        "deep-ones": ["Deep One", "Fish-frog people"],
        "mi-go": ["Mi-go", "Migo", "Fungi from Yuggoth"],
        shoggoths: ["Shoggoth", "Shoggoths"],
        "cult-of-cthulhu": ["Cthulhu cult", "Esoteric Order of Dagon"],
        necronomicon: ["Al Azif", "Book of the Dead"],
        "elder-sign": ["Elder Sign ward", "Sign of the Elder Gods"],
        "the-call-of-cthulhu-story": ["Call of Cthulhu story", "CoC short story"],
        "shadow-over-innsmouth": ["Shadow over Innsmouth", "Innsmouth story"],
        "mountains-of-madness": ["At the Mountains of Madness", "Mountains of Madness"]
    },
    parents: {
        chaosium: "call-of-cthulhu",
        "sandy-petersen": "call-of-cthulhu",
        "h-p-lovecraft": "lovecraft-mythos",
        "call-of-cthulhu-seventh-edition": "call-of-cthulhu",
        "basic-roleplaying": "call-of-cthulhu",
        investigator: "call-of-cthulhu",
        keeper: "call-of-cthulhu",
        sanity: "call-of-cthulhu",
        "mythos-tomes": "lovecraft-mythos",
        "lovecraft-mythos": "call-of-cthulhu",
        "great-old-ones": "lovecraft-mythos",
        "outer-gods": "lovecraft-mythos",
        cthulhu: "great-old-ones",
        nyarlathotep: "outer-gods",
        azathoth: "outer-gods",
        "yog-sothoth": "outer-gods",
        "shub-niggurath": "outer-gods",
        arkham: "lovecraft-mythos",
        innsmouth: "lovecraft-mythos",
        dunwich: "lovecraft-mythos",
        "miskatonic-university": "arkham",
        rlyeh: "lovecraft-mythos",
        antarctica: "lovecraft-mythos",
        "deep-ones": "lovecraft-mythos",
        "mi-go": "lovecraft-mythos",
        shoggoths: "lovecraft-mythos",
        "cult-of-cthulhu": "cthulhu",
        necronomicon: "mythos-tomes",
        "elder-sign": "lovecraft-mythos",
        "the-call-of-cthulhu-story": "lovecraft-mythos",
        "shadow-over-innsmouth": "lovecraft-mythos",
        "mountains-of-madness": "lovecraft-mythos"
    }
});
