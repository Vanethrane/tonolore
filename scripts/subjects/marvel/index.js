/**
 * Marvel subject package — Marvel Comics universe and MCU.
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
        id: "marvel",
        name: "Marvel",
        rootSlug: "marvel",
        theme: "marvel",
        copyright: {
            title: "Marvel is not owned by Ton-o-Lore.",
            body:
                "Marvel, Marvel Comics, the Marvel Cinematic Universe, and all related characters, names, marks, and images are trademarks and copyrights of Marvel Characters, Inc., Marvel Entertainment, Disney, and/or their respective rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by Marvel, Disney, or those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        marvel: ["Marvel Comics", "Marvel Universe", "MCU comics"],
        "stan-lee": ["Stanley Lieber", "Stan Lee"],
        "jack-kirby": ["King Kirby", "Jacob Kurtzberg", "Jack Kirby"],
        "steve-ditko": ["Ditko", "Steve Ditko"],
        "marvel-comics": ["Marvel Publishing", "Timely Comics", "Atlas Comics"],
        mcu: ["Marvel Cinematic Universe", "Marvel Studios films"],
        avengers: ["Earth's Mightiest Heroes", "The Avengers"],
        "x-men": ["XMen", "Xavier's mutants"],
        "fantastic-four": ["FF", "Fantastic 4", "First Family"],
        "guardians-of-the-galaxy": ["GotG", "Guardians"],
        "spider-man": ["Spiderman", "Peter Parker", "Spider Man"],
        "iron-man": ["Tony Stark", "Ironman"],
        "captain-america": ["Steve Rogers", "Cap", "Captain America"],
        thor: ["Thor Odinson", "God of Thunder"],
        hulk: ["Bruce Banner", "The Incredible Hulk"],
        "doctor-strange": ["Stephen Strange", "Sorcerer Supreme", "Dr. Strange"],
        "black-panther": ["T'Challa", "Black Panther"],
        wolverine: ["Logan", "James Howlett", "Wolverine"],
        thanos: ["Mad Titan", "Thanos"],
        loki: ["Loki Laufeyson", "God of Mischief"],
        magneto: ["Erik Lehnsherr", "Max Eisenhardt", "Magneto"],
        "nick-fury": ["Nicholas Fury", "Fury"],
        deadpool: ["Wade Wilson", "Merc with a Mouth"],
        wakanda: ["Kingdom of Wakanda"],
        asgard: ["Realm Eternal", "Asgard"],
        "new-york-city": ["NYC", "New York", "Manhattan"],
        "infinity-stones": ["Infinity Gems", "Infinity Stones"],
        shield: ["SHIELD", "S.H.I.E.L.D.", "Strategic Homeland Intervention"],
        mutants: ["Homo superior", "Mutantkind"],
        multiverse: ["Marvel Multiverse", "Alternate Earths"],
        "reed-richards": ["Mister Fantastic", "Reed Richards", "Mr. Fantastic"],
        "sue-storm": ["Invisible Woman", "Susan Storm", "Sue Richards"],
        "human-torch": ["Johnny Storm", "John Storm", "The Human Torch"],
        "the-thing": ["Ben Grimm", "Benjamin Grimm", "Thing"],
        "chris-evans": ["Christopher Evans"],
        "robert-downey-jr": ["RDJ", "Robert Downey Junior"],
        "chris-hemsworth": ["Hemsworth"]
    },
    parents: {
        "iron-man": "avengers",
        "captain-america": "avengers",
        thor: "avengers",
        hulk: "avengers",
        "spider-man": "avengers",
        wolverine: "x-men",
        magneto: "mutants",
        loki: "asgard",
        "nick-fury": "shield",
        "black-panther": "wakanda",
        mcu: "marvel",
        avengers: "marvel",
        "x-men": "marvel",
        "fantastic-four": "marvel",
        "guardians-of-the-galaxy": "marvel",
        "reed-richards": "fantastic-four",
        "sue-storm": "fantastic-four",
        "human-torch": "fantastic-four",
        "the-thing": "fantastic-four",
        "fantastic-four-2005": "marvel",
        "chris-evans": "marvel",
        "robert-downey-jr": "marvel",
        "chris-hemsworth": "marvel",
        "human-torch-portrayals": "human-torch",
        "human-torch-chris-evans": "human-torch-portrayals",
        "captain-america-portrayals": "captain-america",
        "captain-america-chris-evans": "captain-america-portrayals",
        "iron-man-portrayals": "iron-man",
        "iron-man-robert-downey-jr": "iron-man-portrayals",
        "thor-portrayals": "thor",
        "thor-chris-hemsworth": "thor-portrayals"
    }
});
