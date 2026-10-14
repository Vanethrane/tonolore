/**
 * Adventure Time — Western animation subject package.
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
        id: "adventure-time",
        name: "Adventure Time",
        rootSlug: "adventure-time",
        theme: "adventure-time",
        categories: ["western-animation"],
        copyright: {
            title: "Adventure Time is not owned by Ton-o-Lore.",
            body:
                "Adventure Time, related names, marks, and materials are the property of Cartoon Network / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "adventure-time": ["AT", "Adventure Time with Finn and Jake"],
        "pendleton-ward": ["Pen Ward", "Ward"],
        "adventure-time-series": ["Adventure Time TV", "Adventure Time (TV series)"],
        "fionna-and-cake": ["Fionna and Cake", "Fionna & Cake"],
        "land-of-ooo": ["Ooo", "the Land of Ooo"],
        "candy-kingdom": ["Candy Kingdom", "the Candy Kingdom"],
        "ice-kingdom": ["Ice Kingdom"],
        "fire-kingdom": ["Fire Kingdom"],
        "heroes-of-ooo": ["Finn and Jake", "Tree Fort heroes"],
        nightosphere: ["the Nightosphere"],
        "tree-fort": ["the Tree Fort", "Finn and Jake's house"],
        farmworld: ["Farmworld Ooo"],
        "finn-the-human": ["Finn", "Finn Mertens", "Pen"],
        "jake-the-dog": ["Jake"],
        "princess-bubblegum": ["PB", "Bonnibel", "Princess Bonnibel Bubblegum"],
        marceline: ["Marceline the Vampire Queen", "Marcy"],
        "ice-king": ["Ice King", "the Ice King"],
        "simon-petrikov": ["Simon"],
        "betty-grof": ["Betty", "Magic Woman"],
        "the-lich": ["Lich", "the Last Scholar of GOLB"],
        bmo: ["Be More", "B-MO"],
        "peppermint-butler": ["PepBut", "Peppermint Butler"],
        gunter: ["Gunter the penguin", "Orgalorg"],
        "flame-princess": ["FP", "Phoebe"],
        "hunson-abadeer": ["Hunson"],
        "lumpy-space-princess": ["LSP"],
        "banana-guards": ["Banana Guard"],
        "mushroom-war": ["the Great Mushroom War", "the war"],
        enchiridion: ["the Enchiridion", "the Hero's Handbook"],
        "ice-crown": ["the crown", "Ice King's crown"]
    },
    parents: {
        "finn-the-human": "heroes-of-ooo",
        "jake-the-dog": "heroes-of-ooo",
        bmo: "heroes-of-ooo",
        "princess-bubblegum": "candy-kingdom",
        "peppermint-butler": "candy-kingdom",
        "banana-guards": "candy-kingdom",
        "ice-king": "ice-kingdom",
        gunter: "ice-kingdom",
        "simon-petrikov": "ice-kingdom",
        "flame-princess": "fire-kingdom",
        marceline: "nightosphere",
        "hunson-abadeer": "nightosphere",
        "heroes-of-ooo": "tree-fort",
        "candy-kingdom": "land-of-ooo",
        "ice-kingdom": "land-of-ooo",
        "fire-kingdom": "land-of-ooo",
        "tree-fort": "land-of-ooo",
        "lumpy-space-princess": "land-of-ooo",
        "adventure-time-series": "adventure-time",
        "fionna-and-cake": "adventure-time"
    }
});
