/**
 * Jurassic Park subject package — Crichton and Spielberg's dinosaur franchise.
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
        id: "jurassic-park",
        name: "Jurassic Park",
        rootSlug: "jurassic-park",
        theme: "jurassic-park",
        copyright: {
            title: "Jurassic Park is not owned by Ton-o-Lore.",
            body:
                "Jurassic Park, Jurassic World, and related names, characters, and imagery are the property of their respective rights holders, including the estate of Michael Crichton, Universal Pictures, Amblin Entertainment, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "jurassic-park": ["JP", "Jurassic Park franchise"],
        "michael-crichton": ["Crichton"],
        "steven-spielberg": ["Spielberg"],
        "universal-pictures": ["Universal", "Universal Studios"],
        "jurassic-park-novel": ["Jurassic Park book"],
        "jurassic-park-film": ["Jurassic Park 1993", "JP film"],
        "the-lost-world": ["Lost World", "The Lost World Jurassic Park"],
        "jurassic-world": ["JW", "Jurassic World film"],
        "jurassic-world-fallen-kingdom": ["Fallen Kingdom", "JW2"],
        "john-hammond": ["Hammond", "John Hammond"],
        "alan-grant": ["Grant", "Dr. Grant"],
        "ellie-sattler": ["Ellie", "Dr. Sattler"],
        "ian-malcolm": ["Malcolm", "Dr. Malcolm", "Life finds a way"],
        "robert-muldoon": ["Muldoon"],
        "dennis-nedry": ["Nedry"],
        "claire-dearing": ["Claire"],
        "owen-grady": ["Owen"],
        "henry-wu": ["Dr. Wu", "Wu"],
        "tyrannosaurus-rex": ["T. rex", "T-Rex", "Tyrannosaurus"],
        velociraptor: ["Raptor", "Raptors", "Velociraptors"],
        "indominus-rex": ["Indominus", "I. rex"],
        mosasaurus: ["Mosasaur"],
        "blue-raptor": ["Blue"],
        "isla-nublar": ["Nublar"],
        "isla-sorna": ["Sorna", "Site B"],
        ingen: ["International Genetic Technologies", "InGen"],
        "masrani-global": ["Masrani", "Masrani Global"]
    },
    parents: {
        "john-hammond": "ingen",
        "henry-wu": "ingen",
        "dennis-nedry": "ingen",
        "robert-muldoon": "ingen",
        "alan-grant": "jurassic-park-film",
        "ellie-sattler": "jurassic-park-film",
        "ian-malcolm": "jurassic-park-film",
        "claire-dearing": "jurassic-world",
        "owen-grady": "jurassic-world",
        "blue-raptor": "owen-grady",
        "tyrannosaurus-rex": "isla-nublar",
        velociraptor: "isla-nublar",
        brachiosaurus: "isla-nublar",
        "indominus-rex": "jurassic-world",
        mosasaurus: "jurassic-world",
        "visitor-center": "isla-nublar",
        "control-room": "isla-nublar",
        "jurassic-park-film": "jurassic-park",
        "jurassic-world": "jurassic-park",
        ingen: "isla-nublar"
    }
});
