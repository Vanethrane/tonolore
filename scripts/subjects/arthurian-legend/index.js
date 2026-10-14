/**
 * Arthurian legend — Folklore & legend subject package.
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
        id: "arthurian-legend",
        name: "Arthurian legend",
        rootSlug: "arthurian-legend",
        theme: "arthurian-legend",
        categories: ["folklore"],
        copyright: {
            title: "Arthurian legend is not owned by Ton-o-Lore.",
            body:
                "Arthurian legend, related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "arthurian-legend": ["Arthurian legend", "Matter of Britain", "Arthurian romance"],
        camelot: ["Caerleon", "Arthur's court"],
        avalon: ["Isle of Apples", "Insula Avallonis"],
        tintagel: ["Tintagel Castle"],
        corbenic: ["Carbonek", "Corbenic Castle", "Grail Castle"],
        "king-arthur": ["Arthur", "Arthur Pendragon", "King of the Britons"],
        guinevere: ["Guenevere", "Gwenhwyfar"],
        lancelot: ["Lancelot du Lac", "Launcelot"],
        merlin: ["Myrddin", "Merlin Ambrosius"],
        "morgan-le-fay": ["Morgana", "Morgen", "Morgan le Faye"],
        gawain: ["Gwalchmai", "Gawaine"],
        galahad: ["Galaad"],
        mordred: ["Modred", "Medraut"],
        perceval: ["Percival", "Peredur", "Perceval of Wales"],
        "lady-of-the-lake": ["Viviane", "Nimue", "Niniane"],
        "uther-pendragon": ["Uther", "Uthr Bendragon"],
        bedivere: ["Bedwyr"],
        kay: ["Cei", "Sir Kay"],
        excalibur: ["Caliburn", "Caledfwlch"],
        "round-table": ["the Round Table"],
        "holy-grail": ["Sangreal", "Grail"],
        "siege-perilous": ["Siege Perilous", "Perilous Seat"],
        "battle-of-camlann": ["Camlann", "Camlan"],
        "grail-quest": ["Quest of the Holy Grail", "Grail quest"],
        "le-morte-darthur": ["Le Morte d'Arthur", "Morte Darthur"],
        "thomas-malory": ["Sir Thomas Malory", "Malory"],
        "geoffrey-of-monmouth": ["Geoffrey"],
        "historia-regum-britanniae": ["History of the Kings of Britain", "HRB"],
        pendragon: ["Pendragon line"]
    },
    parents: {
        "king-arthur": "camelot",
        guinevere: "camelot",
        "round-table": "camelot",
        lancelot: "round-table",
        gawain: "round-table",
        galahad: "round-table",
        perceval: "round-table",
        kay: "round-table",
        bedivere: "round-table",
        mordred: "round-table",
        "siege-perilous": "round-table",
        "holy-grail": "corbenic",
        "grail-quest": "holy-grail",
        "morgan-le-fay": "avalon",
        excalibur: "king-arthur",
        merlin: "uther-pendragon"
    }
});
