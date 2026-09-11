/**
 * Spider-Man subject package — Peter Parker and the Spider-Verse mythos.
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
        id: "spider-man",
        name: "Spider-Man",
        rootSlug: "spider-man",
        theme: "spider-man",
        copyright: {
            title: "Spider-Man is not owned by Ton-o-Lore.",
            body:
                "Spider-Man, Peter Parker, related characters, names, marks, and images are trademarks and copyrights of Marvel Characters, Inc., Marvel Entertainment, Disney, and/or their respective rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by Marvel, Disney, or those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "spider-man": ["Spiderman", "Spider Man", "Web-Slinger", "Wall-Crawler"],
        "peter-parker": ["Pete Parker", "Peter Benjamin Parker"],
        "stan-lee": ["Stanley Lieber", "Stan Lee"],
        "steve-ditko": ["Ditko", "Steve Ditko"],
        marvel: ["Marvel Comics", "Marvel Universe"],
        "aunt-may": ["May Parker", "May Parker-Jameson", "Aunt May"],
        "uncle-ben": ["Ben Parker", "Uncle Ben Parker"],
        "mary-jane-watson": ["MJ", "Mary Jane", "MJ Watson"],
        "gwen-stacy": ["Gwendolyne Stacy", "Gwen"],
        "j-jonah-jameson": ["Jonah Jameson", "JJJ", "Jameson"],
        "black-cat": ["Felicia Hardy", "Black Cat"],
        "green-goblin": ["Goblin", "Green Goblin"],
        "norman-osborn": ["Norman Osborn", "Normie Osborn's father"],
        "doctor-octopus": ["Doc Ock", "Otto Octavius", "Dr. Octopus"],
        venom: ["Eddie Brock", "Venom"],
        electro: ["Maxwell Dillon", "Max Dillon"],
        sandman: ["Flint Marko", "William Baker"],
        "miles-morales": ["Miles", "Spider-Man Miles"],
        "spider-gwen": ["Ghost-Spider", "Gwenom", "Spider-Woman Gwen"],
        "spider-verse": ["Spiderverse", "Web-Warriors"],
        "daily-bugle": ["The Bugle", "Daily Bugle"],
        oscorp: ["Oscorp Industries", "Osborn Industries"],
        queens: ["Queens NY", "Forest Hills"],
        "new-york-city": ["NYC", "New York", "Manhattan"],
        "iron-spider": ["Iron Spider", "Iron Spider suit"],
        symbiote: ["Alien costume", "Symbiote suit", "black suit"],
        "amazing-spider-man": ["ASM", "Amazing Spider-Man"],
        "with-great-power": ["Great power great responsibility", "Uncle Ben's lesson"],
        "spider-sense": ["spider sense", "Peter tingle"]
    },
    parents: {
        "peter-parker": "spider-man",
        "aunt-may": "queens",
        "uncle-ben": "queens",
        "mary-jane-watson": "peter-parker",
        "gwen-stacy": "peter-parker",
        "j-jonah-jameson": "daily-bugle",
        "green-goblin": "norman-osborn",
        "norman-osborn": "oscorp",
        venom: "symbiote",
        "miles-morales": "spider-verse",
        "spider-gwen": "spider-verse",
        queens: "new-york-city",
        "amazing-spider-man": "spider-man",
        "iron-spider": "spider-man"
    }
});
