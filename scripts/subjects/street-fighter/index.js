/**
 * Street Fighter — Fighting games subject package.
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
        id: "street-fighter",
        name: "Street Fighter",
        rootSlug: "street-fighter",
        theme: "street-fighter",
        categories: ["fighting-games"],
        copyright: {
            title: "Street Fighter is not owned by Ton-o-Lore.",
            body:
                "Street Fighter, related names, marks, and materials are the property of Capcom / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "street-fighter": ["Street Fighter", "SF", "Streetfighter"],
        ryu: ["Ryu"],
        "ken-masters": ["Ken", "Ken Masters"],
        "chun-li": ["Chun-Li", "Chun Li"],
        guile: ["Guile"],
        sagat: ["Sagat", "Emperor of Muay Thai"],
        zangief: ["Zangief", "Red Cyclone"],
        dhalsim: ["Dhalsim"],
        blanka: ["Blanka"],
        "luke-sullivan": ["Luke", "Luke Sullivan"],
        "jamie-siu": ["Jamie", "Jamie Siu"],
        "m-bison": ["M. Bison", "Bison", "Vega (Japan)", "Dictator"],
        akuma: ["Akuma", "Gouki"],
        "juri-han": ["Juri", "Juri Han"],
        "cammy-white": ["Cammy", "Cammy White"],
        "master-gouken": ["Gouken", "Master Gouken"],
        "world-warriors": ["World Warriors", "World Warrior"],
        shadaloo: ["Shadaloo", "Shadowloo", "Shadaloo (Street Fighter)"],
        "metro-city": ["Metro City"],
        "suzaku-castle": ["Suzaku Castle", "Ryu stage"],
        ansatsuken: ["Ansatsuken", "assassination fist"],
        "psycho-power": ["Psycho Power", "Psycho Power (Street Fighter)"],
        hadoken: ["Hadoken", "Hadouken", "fireball"],
        "world-warrior-tournament": ["World Warrior tournament", "Street Fighter tournament"],
        "street-fighter-ii": ["Street Fighter II", "SF2", "Street Fighter 2"],
        "street-fighter-alpha": ["Street Fighter Alpha", "Street Fighter Zero", "SFA"],
        "street-fighter-iv": ["Street Fighter IV", "SF4", "Street Fighter 4"],
        "street-fighter-6": ["Street Fighter 6", "SF6", "Street Fighter VI"]
    },
    parents: {
        ryu: "world-warriors",
        "ken-masters": "world-warriors",
        "chun-li": "world-warriors",
        guile: "world-warriors",
        sagat: "world-warriors",
        zangief: "world-warriors",
        dhalsim: "world-warriors",
        blanka: "world-warriors",
        "luke-sullivan": "world-warriors",
        "jamie-siu": "world-warriors",
        "m-bison": "shadaloo",
        "juri-han": "shadaloo",
        "cammy-white": "shadaloo"
    }
});
