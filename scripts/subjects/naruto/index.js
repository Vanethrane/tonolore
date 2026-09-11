/**
 * Naruto subject package — Masashi Kishimoto's ninja adventure manga.
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
        id: "naruto",
        name: "Naruto",
        rootSlug: "naruto",
        theme: "naruto",
        copyright: {
            title: "Naruto is not owned by Ton-o-Lore.",
            body:
                "Naruto, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Masashi Kishimoto, Shueisha, TV Tokyo, Pierrot, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        naruto: ["NARUTO", "ナルト"],
        "masashi-kishimoto": ["Kishimoto", "Masashi Kishimoto"],
        "naruto-shippuden": ["Shippuden", "Naruto Shippuden"],
        "boruto-naruto-next-generations": ["Boruto", "Boruto: Naruto Next Generations"],
        "naruto-uzumaki": ["Naruto", "Uzumaki Naruto"],
        "sasuke-uchiha": ["Sasuke", "Uchiha Sasuke"],
        "sakura-haruno": ["Sakura", "Sakura Uchiha", "Haruno Sakura"],
        "kakashi-hatake": ["Kakashi", "Copy Ninja Kakashi", "Hatake Kakashi"],
        "itachi-uchiha": ["Itachi", "Uchiha Itachi"],
        "madara-uchiha": ["Madara", "Uchiha Madara"],
        "hashirama-senju": ["Hashirama", "First Hokage", "Senju Hashirama"],
        jiraiya: ["Pervy Sage", "Jiraiya the Toad Sage"],
        orochimaru: ["Orochimaru of the Sannin"],
        tsunade: ["Lady Tsunade", "Fifth Hokage"],
        "minato-namikaze": ["Minato", "Fourth Hokage", "Yellow Flash"],
        konohagakure: ["Konoha", "Hidden Leaf", "Hidden Leaf Village", "Leaf Village"],
        akatsuki: ["Akatsuki Organization"],
        "team-7": ["Squad 7", "Kakashi's Team"],
        "nine-tails": ["Kurama", "Kyubi", "Nine-Tailed Fox", "Kyuubi"],
        "tailed-beasts": ["Bijuu", "Bijū"],
        rasengan: ["Spiralling Sphere"],
        sharingan: ["Copy Wheel Eye"],
        pain: ["Nagato", "Pain (Nagato)"],
        "boruto-uzumaki": ["Boruto"],
        "hinata-hyuga": ["Hinata", "Hyuga Hinata"],
        "shikamaru-nara": ["Shikamaru"],
        gaara: ["Gaara of the Sand"]
    },
    parents: {
        "naruto-uzumaki": "team-7",
        "sasuke-uchiha": "team-7",
        "sakura-haruno": "team-7",
        "kakashi-hatake": "team-7",
        "itachi-uchiha": "akatsuki",
        pain: "akatsuki",
        "madara-uchiha": "uchiha-clan",
        "hashirama-senju": "senju-clan",
        "team-7": "konohagakure",
        "uchiha-clan": "konohagakure",
        "senju-clan": "konohagakure",
        "nine-tails": "tailed-beasts",
        "boruto-uzumaki": "naruto-uzumaki",
        sharingan: "uchiha-clan",
        jinchuriki: "tailed-beasts"
    }
});
