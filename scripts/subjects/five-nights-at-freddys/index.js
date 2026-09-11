/**
 * Five Nights at Freddy's subject package.
 */

const path = require("path");
const { entities: rawEntities, relationships: rawRelationships } = require("./data");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");

const ALIASES = {
    "five-nights-at-freddys": ["FNAF", "Five Nights at Freddy's", "Five Nights at Freddies"],
    "william-afton": ["Afton", "Purple Guy", "William Afton"],
    "freddy-fazbear": ["Freddy", "Freddy Fazbear"],
    "golden-freddy": ["Golden Freddy", "Fredbear"],
    "the-puppet": ["Puppet", "Marionette", "The Puppet"],
    springtrap: ["Springtrap", "Spring Bonnie"],
    "circus-baby": ["Baby", "Circus Baby"],
    "glamrock-freddy": ["Glamrock Freddy", "Glam Freddy"],
    glitchtrap: ["Glitchtrap", "Malhare"],
    "freddy-fazbears-pizza": ["Freddy's", "Freddy Fazbear's Pizza"],
    "mega-pizzaplex": ["Pizzaplex", "Mega Pizzaplex"],
    "scott-cawthon": ["Scott", "Scott Cawthon"],
    "michael-afton": ["Michael", "Eggs Benedict", "Michael Afton"],
    vanny: ["Vanny"],
    gregory: ["Gregory"]
};

const PARENTS = {
    "freddy-fazbear": "freddy-fazbears-pizza",
    bonnie: "freddy-fazbears-pizza",
    chica: "freddy-fazbears-pizza",
    foxy: "freddy-fazbears-pizza",
    "golden-freddy": "freddy-fazbears-pizza",
    "the-puppet": "freddy-fazbears-pizza",
    "circus-baby": "circus-babys-entertainment-and-rental",
    ballora: "circus-babys-entertainment-and-rental",
    "funtime-freddy": "circus-babys-entertainment-and-rental",
    "glamrock-freddy": "mega-pizzaplex",
    "montgomery-gator": "mega-pizzaplex",
    "glamrock-chica": "mega-pizzaplex",
    "roxanne-wolf": "mega-pizzaplex",
    springtrap: "fazbears-fright",
    "william-afton": "afton-robotics",
    "michael-afton": "afton-robotics",
    "elizabeth-afton": "afton-robotics"
};

module.exports = mergeSubjectPackage({
    subjectDir: path.join(__dirname),
    meta: {
        id: "five-nights-at-freddys",
        name: "Five Nights at Freddy's",
        rootSlug: "five-nights-at-freddys",
        theme: "five-nights-at-freddys",
        copyright: {
            title: "Five Nights at Freddy's is not owned by Ton-o-Lore.",
            body:
                "Five Nights at Freddy's and all related names, characters, and imagery are trademarks of Scott Cawthon and/or their respective rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by Scott Cawthon, Steel Wool Studios, or other FNAF rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: ALIASES,
    parents: PARENTS
});
