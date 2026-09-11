/**
 * Dragon Ball subject package.
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
        id: "dragon-ball",
        name: "Dragon Ball",
        rootSlug: "dragon-ball",
        theme: "dragon-ball",
        copyright: {
            title: "Dragon Ball is not owned by Ton-o-Lore.",
            body:
                "Dragon Ball, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Akira Toriyama, Bird Studio, Shueisha, Toei Animation, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by the Dragon Ball rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dragon-ball": ["DB", "Dragonball", "Dragon Ball Z", "DBZ"],
        "akira-toriyama": ["Toriyama", "Akira Toriyama"],
        "son-goku": ["Goku", "Kakarot", "Son Goku"],
        vegeta: ["Prince Vegeta"],
        "son-gohan": ["Gohan"],
        piccolo: ["Piccolo Jr.", "Demon King Piccolo"],
        bulma: ["Bulma Brief"],
        frieza: ["Freeza", "Frieza"],
        "majin-buu": ["Buu", "Majin Boo"],
        "dragon-balls": ["Dragonballs", "Dragon Balls"],
        "super-saiyan": ["SSJ", "Super Saiyan"],
        "ultra-instinct": ["Ultra Instinct", "MUI", "Autonomous Ultra Instinct"],
        "z-fighters": ["Z Warriors", "Dragon Team"],
        trunks: ["Future Trunks", "Trunks Brief"],
        beerus: ["Bills", "Beerus"],
        broly: ["Legendary Super Saiyan"],
        "earth-dragon-ball": ["Earth", "DB Earth"],
        "dragon-ball-z": ["DBZ"],
        "dragon-ball-super": ["DBS", "Super"]
    },
    parents: {
        "son-goku": "z-fighters",
        vegeta: "z-fighters",
        "son-gohan": "z-fighters",
        piccolo: "z-fighters",
        krillin: "z-fighters",
        "android-18": "z-fighters",
        "android-17": "z-fighters",
        "tien-shinhan": "z-fighters",
        yamcha: "z-fighters",
        trunks: "z-fighters",
        goten: "z-fighters",
        frieza: "frieza-force",
        "ginyu-force": "frieza-force",
        cell: "red-ribbon-army",
        "dr-gero": "red-ribbon-army",
        bulma: "capsule-corporation",
        beerus: "universe-7",
        whis: "universe-7"
    }
});
