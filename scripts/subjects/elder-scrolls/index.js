/**
 * The Elder Scrolls subject package — Bethesda Softworks' Tamriel fantasy franchise.
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
        id: "elder-scrolls",
        name: "The Elder Scrolls",
        rootSlug: "elder-scrolls",
        theme: "elder-scrolls",
        copyright: {
            title: "The Elder Scrolls is not owned by Ton-o-Lore.",
            body:
                "The Elder Scrolls, Tamriel, Skyrim, Morrowind, Oblivion, and related characters, artwork, logos, and intellectual property are the property of Bethesda Softworks LLC, ZeniMax Media Inc., and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by Bethesda Softworks or those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "elder-scrolls": ["TES", "Elder Scrolls", "The Elder Scrolls series"],
        "bethesda-softworks": ["Bethesda", "Bethesda Game Studios", "BGS"],
        nirn: ["Mundus"],
        tamriel: ["Continent of Tamriel"],
        cyrodiil: ["Imperial Province", "Heartlands"],
        skyrim: ["Province of Skyrim", "Old Kingdom"],
        morrowind: ["Resdayn", "Dunmeri province"],
        vvardenfell: ["Island of Vvardenfell"],
        "imperial-city": ["Imperialisle", "City of a Thousand Cults"],
        "white-gold-tower": ["White Gold Tower", "Tower of White-Gold"],
        whiterun: ["Whiterun Hold"],
        aedra: ["Ancestors", "Divines"],
        daedra: ["Daedric Princes", "Daedra Lords"],
        "nine-divines": ["Eight Divines", "Imperial pantheon"],
        talos: ["Ysmir", "Dragonborn Emperor"],
        akatosh: ["Auriel", "Alkosh", "Dragon God of Time"],
        azura: ["Azurah", "Mother of the Rose"],
        sheogorath: ["Madgod", "Prince of Madness"],
        "mehrunes-dagon": ["Dagon", "Prince of Destruction"],
        alduin: ["World-Eater", "Firstborn of Akatosh"],
        dragonborn: ["Dovahkiin", "Last Dragonborn"],
        "septim-empire": ["Third Empire", "Empire of Tamriel", "Empire"],
        "tiber-septim": ["Talos Stormcrown", "Hjalti Early-Beard"],
        "martin-septim": ["Brother Martin", "Martin"],
        tribunal: ["ALMSIVI", "Living Gods", "Three"],
        vivec: ["Vehk", "Lord Vivec"],
        nerevarine: ["Incarnate", "Nerevar"],
        nords: ["Nord", "Children of the Sky"],
        dunmer: ["Dark Elves", "Dark Elf", "Chimer"],
        "elder-scrolls-iii-morrowind": ["Morrowind", "TES III", "TES3"],
        "elder-scrolls-iv-oblivion": ["Oblivion", "TES IV", "TES4"],
        "elder-scrolls-v-skyrim": ["Skyrim", "TES V", "TES5"],
        "oblivion-crisis": ["Oblivion Invasion", "Crisis"]
    },
    parents: {
        tamriel: "nirn",
        cyrodiil: "tamriel",
        skyrim: "tamriel",
        morrowind: "tamriel",
        vvardenfell: "morrowind",
        "imperial-city": "cyrodiil",
        "white-gold-tower": "imperial-city",
        whiterun: "skyrim",
        talos: "nine-divines",
        akatosh: "aedra",
        azura: "daedra",
        sheogorath: "daedra",
        "mehrunes-dagon": "daedra",
        "tiber-septim": "septim-empire",
        "martin-septim": "septim-empire",
        vivec: "tribunal",
        tribunal: "morrowind",
        nords: "skyrim",
        dunmer: "morrowind",
        "elder-scrolls-iii-morrowind": "elder-scrolls",
        "elder-scrolls-iv-oblivion": "elder-scrolls",
        "elder-scrolls-v-skyrim": "elder-scrolls",
        alduin: "skyrim",
        dragonborn: "skyrim"
    }
});
