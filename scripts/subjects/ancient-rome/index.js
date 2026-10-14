/**
 * Ancient Rome — History subject package.
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
        id: "ancient-rome",
        name: "Ancient Rome",
        rootSlug: "ancient-rome",
        theme: "ancient-rome",
        categories: ["history"],
        copyright: {
            title: "Ancient Rome is not owned by Ton-o-Lore.",
            body:
                "Ancient Rome, related names, marks, and materials are the property of Public-domain historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "ancient-rome": ["Ancient Rome", "Rome", "Roman world"],
        rome: ["Roma", "the City", "Urbs"],
        "roman-republic": ["the Republic", "Res publica Romana"],
        "roman-empire": ["the Empire", "Imperium Romanum", "principate"],
        "roman-senate": ["the Senate", "Senatus"],
        spqr: ["Senatus Populusque Romanus", "the Senate and People of Rome"],
        "roman-forum": ["Forum Romanum", "the Forum"],
        colosseum: ["Flavian Amphitheatre", "Coliseum"],
        pantheon: ["Pantheon of Rome"],
        carthage: ["Kart-hadast", "Punic Carthage"],
        romulus: ["Romulus the founder"],
        "julius-caesar": ["Caesar", "Gaius Julius Caesar"],
        cicero: ["Marcus Tullius Cicero", "Tully"],
        pompey: ["Pompey the Great", "Pompeius Magnus"],
        augustus: ["Octavian", "Octavianus", "Gaius Julius Caesar Augustus"],
        "mark-antony": ["Marcus Antonius", "Antony"],
        hannibal: ["Hannibal Barca"],
        "scipio-africanus": ["Scipio", "Africanus", "Publius Cornelius Scipio"],
        constantine: ["Constantine the Great", "Constantine I"],
        nero: ["Nero Claudius Caesar"],
        trajan: ["Traianus", "Optimus Princeps"],
        "punic-wars": ["Punic Wars", "wars with Carthage"],
        "battle-of-cannae": ["Cannae"],
        "crossing-the-rubicon": ["the Rubicon", "alea iacta est"],
        "assassination-of-caesar": ["Ides of March", "murder of Caesar"],
        "battle-of-actium": ["Actium"],
        "pax-romana": ["Roman Peace"],
        "roman-legion": ["the legion", "legio"],
        "twelve-tables": ["Law of the Twelve Tables", "Duodecim Tabulae"],
        "commentarii-de-bello-gallico": ["Gallic War", "Caesar's Commentaries"],
        "edict-of-milan": ["Edict of Milan", "313 edict"]
    },
    parents: {
        "roman-forum": "rome",
        colosseum: "rome",
        pantheon: "rome",
        "roman-senate": "roman-republic",
        spqr: "roman-senate",
        "twelve-tables": "roman-forum",
        "julius-caesar": "roman-republic",
        cicero: "roman-senate",
        pompey: "roman-republic",
        augustus: "roman-empire",
        nero: "roman-empire",
        trajan: "roman-empire",
        constantine: "roman-empire",
        "pax-romana": "roman-empire",
        hannibal: "punic-wars",
        "scipio-africanus": "punic-wars",
        "battle-of-cannae": "punic-wars",
        carthage: "punic-wars"
    }
});
