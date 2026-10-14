/**
 * Tekken — Fighting games subject package.
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
        id: "tekken",
        name: "Tekken",
        rootSlug: "tekken",
        theme: "tekken",
        categories: ["fighting-games"],
        copyright: {
            title: "Tekken is not owned by Ton-o-Lore.",
            body:
                "Tekken, related names, marks, and materials are the property of Bandai Namco / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        tekken: ["Tekken", "鉄拳"],
        "heihachi-mishima": ["Heihachi", "Heihachi Mishima"],
        "kazuya-mishima": ["Kazuya", "Kazuya Mishima", "Devil Kazuya"],
        "jin-kazama": ["Jin", "Jin Kazama", "Devil Jin"],
        "jun-kazama": ["Jun", "Jun Kazama"],
        "asuka-kazama": ["Asuka", "Asuka Kazama"],
        "lee-chaolan": ["Lee", "Lee Chaolan", "Violet"],
        "lars-alexandersson": ["Lars", "Lars Alexandersson"],
        "paul-phoenix": ["Paul", "Paul Phoenix"],
        "marshall-law": ["Law", "Marshall Law"],
        "nina-williams": ["Nina", "Nina Williams"],
        king: ["King", "King I", "King II"],
        "ling-xiaoyu": ["Xiaoyu", "Ling Xiaoyu"],
        yoshimitsu: ["Yoshimitsu"],
        hwoarang: ["Hwoarang"],
        "steve-fox": ["Steve", "Steve Fox"],
        "eddy-gordo": ["Eddy", "Eddy Gordo"],
        "mishima-zaibatsu": ["Mishima Zaibatsu", "Zaibatsu"],
        "g-corporation": ["G Corporation", "G Corp"],
        "tekken-force": ["Tekken Force"],
        "kazama-family": ["Kazama family", "Kazama"],
        "king-of-iron-fist-tournament": [
            "King of Iron Fist Tournament",
            "King of Iron Fist",
            "Iron Fist Tournament"
        ],
        "hon-maru": ["Hon-Maru", "Honmaru"],
        yakushima: ["Yakushima"],
        "devil-gene": ["Devil Gene", "Devil Factor"],
        "mishima-style-karate": ["Mishima-style karate", "Mishima karate"],
        "kazama-style": ["Kazama-style", "Kazama-style traditional martial arts"],
        "tekken-2": ["Tekken 2", "Tekken2"],
        "tekken-3": ["Tekken 3", "Tekken3"],
        "tekken-7": ["Tekken 7", "Tekken7"],
        "tekken-8": ["Tekken 8", "Tekken8"]
    },
    parents: {
        "heihachi-mishima": "mishima-zaibatsu",
        "lee-chaolan": "mishima-zaibatsu",
        "jin-kazama": "mishima-zaibatsu",
        "lars-alexandersson": "tekken-force",
        "kazuya-mishima": "g-corporation",
        "jun-kazama": "kazama-family",
        "asuka-kazama": "kazama-family"
    }
});
