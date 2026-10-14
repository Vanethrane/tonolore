/**
 * NJPW — Pro wrestling subject package.
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
        id: "njpw",
        name: "NJPW",
        rootSlug: "njpw",
        theme: "njpw",
        categories: ["wrestling"],
        copyright: {
            title: "NJPW is not owned by Ton-o-Lore.",
            body:
                "NJPW, related names, marks, and materials are the property of New Japan Pro-Wrestling / Bushiroad / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        njpw: ["NJPW", "New Japan", "New Japan Pro-Wrestling", "New Japan Pro Wrestling"],
        "antonio-inoki": ["Inoki", "Kanji Inoki"],
        bushiroad: ["Bushiroad Inc."],
        "hiroshi-tanahashi": ["Tanahashi", "The Ace", "Ace"],
        "kazuchika-okada": ["Okada", "Rainmaker", "The Rainmaker"],
        "tetsuya-naito": ["Naito", "Tranquilo"],
        "kota-ibushi": ["Ibushi", "Golden Star"],
        "will-ospreay": ["Ospreay", "Aerial Assassin"],
        "jay-white": ["Switchblade", "Jay White", "Switchblade Jay White"],
        "hiromu-takahashi": ["Hiromu", "The Bomber"],
        "shingo-takagi": ["Shingo", "The Dragon"],
        "jushin-thunder-liger": ["Liger", "Jushin Liger", "Jushin Thunder Liger"],
        "tatsumi-fujinami": ["Fujinami", "The Dragon (Fujinami)"],
        "los-ingobernables-de-japon": ["LIJ", "Los Ingobernables de Japon", "L.I.J."],
        "bullet-club": ["Bullet Club", "BC", "Bullet Club (NJPW)"],
        chaos: ["CHAOS", "Chaos (NJPW)"],
        "united-empire": ["United Empire", "UE"],
        "g1-climax": ["G1", "G1 Climax", "G1 Climax tournament"],
        "wrestle-kingdom": ["Wrestle Kingdom", "WK", "January 4 Dome Show"],
        dominion: ["Dominion (NJPW)", "Dominion in Osaka-jo Hall"],
        "sakura-genesis": ["Sakura Genesis", "Invasion Attack"],
        "new-japan-cup": ["New Japan Cup", "NJC"],
        "tokyo-dome": ["Tokyo Dome", "The Big Egg"],
        "korakuen-hall": ["Korakuen", "Korakuen Hall"],
        "osaka-jo-hall": ["Osaka-jo Hall", "Osaka Castle Hall"],
        "njpw-world": ["NJPW World", "New Japan World"],
        "iwgp-world-heavyweight-championship": [
            "IWGP World Heavyweight Championship",
            "IWGP World Title",
            "IWGP Heavyweight Championship"
        ],
        "iwgp-junior-heavyweight-championship": [
            "IWGP Junior Heavyweight Championship",
            "IWGP Junior Title"
        ],
        "never-openweight-championship": ["NEVER Openweight Championship", "NEVER Title"],
        "strong-style": ["Strong Style", "King's Road", "fighting spirit"]
    },
    parents: {
        "tetsuya-naito": "los-ingobernables-de-japon",
        "hiromu-takahashi": "los-ingobernables-de-japon",
        "shingo-takagi": "los-ingobernables-de-japon",
        "jay-white": "bullet-club",
        "kazuchika-okada": "chaos",
        "will-ospreay": "united-empire"
    }
});
