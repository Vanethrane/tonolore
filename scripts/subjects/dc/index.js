/**
 * DC / Batman subject package — DC Comics with Batman at the center.
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
        id: "dc",
        name: "DC / Batman",
        rootSlug: "dc",
        theme: "dc",
        copyright: {
            title: "DC / Batman is not owned by Ton-o-Lore.",
            body:
                "DC, DC Comics, Batman, Superman, Wonder Woman, the Justice League, and all related characters, names, marks, and images are trademarks and copyrights of DC Comics, Warner Bros. Discovery, and/or their respective rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by DC, Warner Bros., or those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        dc: ["DC Comics", "DC Universe", "Batman universe"],
        "bob-kane": ["Robert Kane", "Bob Kane"],
        "bill-finger": ["William Finger", "Bill Finger"],
        "dc-comics": ["Detective Comics Inc.", "DC Entertainment"],
        batman: ["The Dark Knight", "Caped Crusader", "Bat-Man"],
        "bruce-wayne": ["Bruce Wayne", "Matches Malone"],
        gotham: ["Gotham City", "Gotham"],
        batcave: ["Bat Cave", "Batman's cave"],
        "alfred-pennyworth": ["Alfred", "Alfred Pennyworth"],
        "bat-family": ["Batfamily", "Bat Family"],
        nightwing: ["Dick Grayson", "Nightwing"],
        robin: ["The Boy Wonder", "Robin"],
        batgirl: ["Barbara Gordon", "Batgirl"],
        batmobile: ["Bat-Mobile", "Bat Mobile"],
        "jim-gordon": ["Commissioner Gordon", "James Gordon", "Gordon"],
        joker: ["The Joker", "Clown Prince of Crime"],
        "harley-quinn": ["Harleen Quinzel", "Harley Quinn"],
        catwoman: ["Selina Kyle", "Catwoman"],
        penguin: ["Oswald Cobblepot", "The Penguin"],
        riddler: ["Edward Nygma", "Edward Nashton", "The Riddler"],
        "two-face": ["Harvey Dent", "Two-Face"],
        "arkham-asylum": ["Arkham", "Elizabeth Arkham Asylum"],
        superman: ["Clark Kent", "Kal-El", "Man of Steel"],
        "wonder-woman": ["Diana Prince", "Diana of Themyscira"],
        "justice-league": ["JL", "Justice League of America", "JLA"],
        metropolis: ["Metropolis City"],
        themyscira: ["Paradise Island", "Themyscira"],
        "lex-luthor": ["Lex", "Alexander Luthor"],
        "detective-comics": ["Det. Comics", "Detective Comics"],
        "gotham-city-police": ["GCPD", "Gotham PD"],
        "wayne-enterprises": ["WayneCorp", "Wayne Industries"]
    },
    parents: {
        batman: "bat-family",
        "bruce-wayne": "wayne-enterprises",
        nightwing: "bat-family",
        robin: "bat-family",
        batgirl: "bat-family",
        "alfred-pennyworth": "bat-family",
        "jim-gordon": "gotham-city-police",
        joker: "arkham-asylum",
        "harley-quinn": "arkham-asylum",
        riddler: "arkham-asylum",
        "two-face": "arkham-asylum",
        batcave: "gotham",
        "arkham-asylum": "gotham",
        superman: "justice-league",
        "wonder-woman": "themyscira",
        "lex-luthor": "metropolis"
    }
});
