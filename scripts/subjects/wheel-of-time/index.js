/**
 * Wheel of Time subject package — Robert Jordan's epic fantasy series.
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
        id: "wheel-of-time",
        name: "The Wheel of Time",
        rootSlug: "wheel-of-time",
        theme: "wheel-of-time",
        copyright: {
            title: "The Wheel of Time is not owned by Ton-o-Lore.",
            body:
                "The Wheel of Time, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including the estate of Robert Jordan, Brandon Sanderson, Tor Books / Macmillan, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "wheel-of-time": ["WoT", "Wheel of Time", "The Wheel of Time series"],
        "robert-jordan": ["Jordan", "James Oliver Rigney Jr.", "James Rigney"],
        "rand-althor": ["Rand", "The Dragon Reborn", "Car'a'carn", "He Who Comes With the Dawn"],
        "mat-cauthon": ["Mat", "Matrim Cauthon"],
        "perrin-aybara": ["Perrin", "Young Bull", "Goldeneyes"],
        "egwene-alvere": ["Egwene", "Amyrlin"],
        "nynaeve-almeara": ["Nynaeve", "Nynaeve al'Meara"],
        "moiraine-damodred": ["Moiraine", "Moiraine Sedai"],
        "lan-mandragoran": ["Lan", "Aan'allein", "al'Lan Mandragoran"],
        "thom-merrilin": ["Thom", "Master Bard"],
        "elayne-trakand": ["Elayne", "Daughter-Heir"],
        "min-farshaw": ["Min"],
        tuon: ["Fortuona", "Daughter of the Nine Moons"],
        ishamael: ["Ba'alzamon", "Moridin", "Elan Morin Tedronai"],
        lanfear: ["Mierin", "Mierin Eronaile", "Cyndane"],
        "lews-therin-telamon": ["Lews Therin", "The Dragon", "Kinslayer"],
        "one-power": ["OP", "the Power"],
        taveren: ["ta'veren"],
        "dark-one": ["Shai'tan", "Father of Lies", "Great Lord"],
        "tarmon-gaidon": ["Last Battle", "Tarmon Gaidon"],
        "aes-sedai": ["Sisters", "Tower Aes Sedai"],
        "children-of-the-light": ["Whitecloaks", "Children"],
        ashaman: ["Asha'man", "Black Tower"],
        "padan-fain": ["Fain", "Ordeith", "Mordeth"]
    },
    parents: {
        "rand-althor": "two-rivers",
        "mat-cauthon": "two-rivers",
        "perrin-aybara": "two-rivers",
        "egwene-alvere": "two-rivers",
        "nynaeve-almeara": "two-rivers",
        "emonds-field": "two-rivers",
        "moiraine-damodred": "aes-sedai",
        "siuan-sanche": "aes-sedai",
        "cadsuane-melaidhrin": "aes-sedai",
        "verin-mathwin": "aes-sedai",
        "black-ajah": "aes-sedai",
        "white-tower": "tar-valon",
        ishamael: "forsaken",
        lanfear: "forsaken",
        demandred: "forsaken",
        aviendha: "aiel",
        tuon: "seanchan",
        "faile-bashere": "two-rivers"
    }
});
