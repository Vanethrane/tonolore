/**
 * The Witcher subject package — Sapkowski's saga and CD Projekt adaptations.
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
        id: "the-witcher",
        name: "The Witcher",
        rootSlug: "the-witcher",
        theme: "the-witcher",
        copyright: {
            title: "The Witcher is not owned by Ton-o-Lore.",
            body:
                "The Witcher, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Andrzej Sapkowski, CD Projekt, CD Projekt RED, Netflix, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-witcher": ["Witcher", "Wiedźmin"],
        "andrzej-sapkowski": ["Sapkowski", "A. Sapkowski"],
        "cd-projekt": ["CDProjekt", "CD Projekt S.A."],
        "cd-projekt-red": ["CDPR", "CD Projekt Red"],
        "witcher-saga": ["Witcher books", "Witcher novels"],
        "the-witcher-3": ["Witcher 3", "TW3", "Wild Hunt"],
        "the-witcher-netflix": ["Witcher Netflix", "The Witcher TV series"],
        "geralt-of-rivia": ["Geralt", "White Wolf", "Gwynbleidd", "Butcher of Blaviken"],
        ciri: ["Cirilla", "Cirilla Fiona Elen Riannon", "Zireael", "Child of Surprise"],
        yennefer: ["Yennefer of Vengerberg", "Yen"],
        "triss-merigold": ["Triss", "Merigold"],
        dandelion: ["Jaskier", "Julian Alfred Pankratz"],
        vesemir: ["Vesemir of Kaer Morhen"],
        "emhyr-var-emreis": ["Emhyr", "Deithwen Addan yn Carn aep Morvudd", "Dunny"],
        eskel: ["Eskel of Kaer Morhen"],
        lambert: ["Lambert of Kaer Morhen"],
        regis: ["Emiel Regis", "Regis Rohellec Terzieff-Godefroy"],
        "philippa-eilhart": ["Philippa", "Phil"],
        avallach: ["Avallac'h", "Crevan Espane aep Caomhan Macha"],
        "gaunter-odimm": ["Master Mirror", "Man of Glass", "O'Dimm"],
        "the-continent": ["Continent"],
        "kaer-morhen": ["Kaer Morhen keep", "Wolves' keep"],
        nilfgaard: ["Nilfgaardian Empire", "Empire of Nilfgaard"],
        redania: ["Kingdom of Redania"],
        cintra: ["Kingdom of Cintra"],
        novigrad: ["Free City of Novigrad"],
        skellige: ["Skellige Isles", "Skellige Islands"],
        "school-of-the-wolf": ["Wolf School", "School of the Wolf witchers"],
        "wild-hunt": ["Wraiths of Mörhogg", "Dearg Ruadhri"],
        "lodge-of-sorceresses": ["The Lodge", "Lodge"],
        witchers: ["Witcher", "Witcher caste"],
        "elder-blood": ["Hen Ichaer", "Lara Dorren's blood"],
        "law-of-surprise": ["Law of Surprise custom", "Child of Surprise"]
    },
    parents: {
        "geralt-of-rivia": "school-of-the-wolf",
        vesemir: "school-of-the-wolf",
        eskel: "school-of-the-wolf",
        lambert: "school-of-the-wolf",
        "school-of-the-wolf": "witchers",
        "kaer-morhen": "the-continent",
        nilfgaard: "the-continent",
        redania: "the-continent",
        cintra: "the-continent",
        novigrad: "the-continent",
        skellige: "the-continent",
        "triss-merigold": "lodge-of-sorceresses",
        "philippa-eilhart": "lodge-of-sorceresses",
        "cd-projekt-red": "cd-projekt",
        "the-witcher-3": "the-witcher",
        "witcher-saga": "the-witcher",
        "the-witcher-netflix": "the-witcher",
        ciri: "cintra",
        "gaunter-odimm": "the-witcher-3"
    }
});
