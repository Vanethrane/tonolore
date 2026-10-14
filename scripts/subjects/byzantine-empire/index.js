/**
 * Byzantine Empire — History subject package.
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
        id: "byzantine-empire",
        name: "Byzantine Empire",
        rootSlug: "byzantine-empire",
        theme: "byzantine-empire",
        categories: ["history"],
        copyright: {
            title: "Byzantine Empire is not owned by Ton-o-Lore.",
            body:
                "The historical record of the Byzantine Empire is public-domain. Modern names, marks, reconstructions, and media adaptations remain with their respective rights holders. Ton-o-Lore is an independent educational encyclopedia project. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "byzantine-empire": [
            "Byzantium",
            "Eastern Roman Empire",
            "Empire of the Romans"
        ],
        constantinople: ["Byzantium", "New Rome", "Istanbul"],
        "hagia-sophia": ["Hagia Sofia", "Ayasofya", "Church of the Holy Wisdom"],
        "justinian-i": ["Justinian", "Justinian the Great"],
        theodora: ["Empress Theodora"],
        "constantine-the-great": ["Constantine I", "Constantine"],
        "constantine-xi": [
            "Constantine XI",
            "Constantine Palaiologos",
            "Constantine XI Palaiologos"
        ],
        "mehmed-ii": ["Mehmet II", "Mehmed the Conqueror"],
        "fall-of-constantinople": ["1453", "Siege of Constantinople 1453"],
        "fourth-crusade": ["Sack of Constantinople 1204"],
        "corpus-juris-civilis": [
            "Justinian Code",
            "Code of Justinian",
            "Body of Civil Law"
        ]
    },
    parents: {
        "hagia-sophia": "constantinople",
        "hippodrome-of-constantinople": "constantinople",
        "theodosian-walls": "constantinople",
        "nika-riots": "constantinople",
        "fall-of-constantinople": "constantinople",
        "latin-empire": "constantinople"
    }
});
