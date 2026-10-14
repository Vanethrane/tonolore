/**
 * Formula 1 — Sports subject package.
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
        id: "formula-1",
        name: "Formula 1",
        rootSlug: "formula-1",
        theme: "formula-1",
        categories: ["sports"],
        copyright: {
            title: "Formula 1 is not owned by Ton-o-Lore.",
            body:
                "Formula 1, related names, marks, and materials are the property of Formula One Group / FIA / respective teams and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "formula-1": ["Formula 1", "F1", "Formula One", "Grand Prix racing"],
        fia: ["FIA", "Fédération Internationale de l'Automobile"],
        "formula-one-group": ["Formula One Group", "F1 Group", "Liberty Media F1"],
        "bernie-ecclestone": ["Ecclestone", "Bernie", "Bernie Ecclestone"],
        "scuderia-ferrari": ["Ferrari", "Scuderia Ferrari", "the Prancing Horse"],
        "enzo-ferrari": ["Enzo", "Enzo Ferrari", "Il Commendatore"],
        mclaren: ["McLaren", "McLaren Racing", "McLaren F1"],
        "mercedes-amg-f1": ["Mercedes", "Mercedes-AMG Petronas", "Mercedes F1", "Mercedes-AMG"],
        "toto-wolff": ["Wolff", "Toto Wolff"],
        "red-bull-racing": ["Red Bull", "Red Bull Racing", "RBR", "Oracle Red Bull Racing"],
        "christian-horner": ["Horner", "Christian Horner"],
        "juan-manuel-fangio": ["Fangio", "Juan Manuel Fangio"],
        "niki-lauda": ["Lauda", "Niki Lauda"],
        "ayrton-senna": ["Senna", "Ayrton Senna"],
        "alain-prost": ["Prost", "Alain Prost", "The Professor"],
        "michael-schumacher": ["Schumacher", "Schumi", "Michael Schumacher"],
        "sebastian-vettel": ["Vettel", "Seb", "Sebastian Vettel"],
        "lewis-hamilton": ["Hamilton", "Lewis Hamilton", "Sir Lewis Hamilton"],
        "max-verstappen": ["Verstappen", "Max", "Max Verstappen"],
        monaco: ["Monaco", "Circuit de Monaco", "Monte Carlo"],
        monza: ["Monza", "Autodromo Nazionale Monza", "Temple of Speed"],
        silverstone: ["Silverstone", "Silverstone Circuit"],
        "spa-francorchamps": ["Spa", "Spa-Francorchamps", "Circuit de Spa-Francorchamps"],
        imola: ["Imola", "Autodromo Enzo e Dino Ferrari"],
        "monaco-grand-prix": ["Monaco GP", "Monaco Grand Prix"],
        "italian-grand-prix": ["Italian GP", "Italian Grand Prix", "Monza GP"],
        "british-grand-prix": ["British GP", "British Grand Prix", "Silverstone GP"],
        "san-marino-grand-prix-1994": ["1994 San Marino Grand Prix", "Imola 1994", "San Marino 1994"],
        "world-drivers-championship": [
            "Drivers' Championship",
            "World Drivers' Championship",
            "WDC"
        ],
        "constructors-championship": [
            "Constructors Championship",
            "World Constructors' Championship",
            "WCC"
        ],
        "hybrid-era": ["hybrid era", "turbo-hybrid era", "2014 regulations"],
        drs: ["DRS", "Drag Reduction System"]
    },
    parents: {
        "enzo-ferrari": "scuderia-ferrari",
        "michael-schumacher": "scuderia-ferrari",
        "niki-lauda": "scuderia-ferrari",
        "ayrton-senna": "mclaren",
        "alain-prost": "mclaren",
        "lewis-hamilton": "mercedes-amg-f1",
        "toto-wolff": "mercedes-amg-f1",
        "max-verstappen": "red-bull-racing",
        "sebastian-vettel": "red-bull-racing",
        "christian-horner": "red-bull-racing"
    }
});
