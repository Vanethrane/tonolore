/**
 * Star Wars subject package.
 *
 * Merges hand-authored core data with optional expanded.json
 * produced by expandFromFandom.js (Wookieepedia fair-use thumbs).
 */

const path = require("path");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");
const {
    entities: rawEntities,
    relationships: rawRelationships
} = require("./data");

const ALIASES = {
    "star-wars": ["Star Wars", "SW"],
    "luke-skywalker": ["Luke", "Luke Skywalker"],
    "leia-organa": ["Leia", "Princess Leia", "Leia Organa"],
    "han-solo": ["Han", "Han Solo"],
    "obi-wan-kenobi": ["Obi-Wan", "Ben Kenobi", "Obi-Wan Kenobi"],
    "darth-vader": ["Vader", "Darth Vader"],
    "anakin-skywalker": ["Anakin", "Anakin Skywalker"],
    "emperor-palpatine": ["Palpatine", "Darth Sidious", "Sidious", "The Emperor"],
    "padme-amidala": ["Padmé", "Padme", "Padmé Amidala"],
    "kylo-ren": ["Kylo", "Ben Solo", "Kylo Ren"],
    "darth-maul": ["Maul", "Darth Maul"],
    "count-dooku": ["Dooku", "Darth Tyranus", "Count Dooku"],
    "general-grievous": ["Grievous", "General Grievous"],
    "millennium-falcon": ["Falcon", "Millennium Falcon"],
    "jedi-order": ["Jedi", "Jedi Order"],
    "galactic-empire": ["Empire", "Imperial", "Galactic Empire"],
    "rebel-alliance": ["Rebels", "Rebellion", "Rebel Alliance"],
    "the-force": ["Force", "The Force"],
    "death-star": ["Death Star"],
    "ahsoka-tano": ["Ahsoka", "Ahsoka Tano"],
    "din-djarin": ["Mando", "The Mandalorian", "Din Djarin"],
    grogu: ["Baby Yoda", "Grogu", "Din Grogu"],
    "c-3po": ["C-3PO", "Threepio"],
    "r2-d2": ["R2-D2", "R2"],
    "jabba-the-hutt": ["Jabba", "Jabba the Hutt"],
    rey: ["Rey", "Rey Skywalker"]
};

const PARENTS = {
    "luke-skywalker": "rebel-alliance",
    "leia-organa": "rebel-alliance",
    "han-solo": "rebel-alliance",
    chewbacca: "rebel-alliance",
    "darth-vader": "galactic-empire",
    "emperor-palpatine": "sith",
    "obi-wan-kenobi": "jedi-order",
    yoda: "jedi-order",
    "anakin-skywalker": "jedi-order",
    "qui-gon-jinn": "jedi-order",
    "mace-windu": "jedi-order",
    "ahsoka-tano": "jedi-order",
    "darth-maul": "sith",
    "count-dooku": "sith",
    rey: "resistance",
    finn: "resistance",
    "poe-dameron": "resistance",
    "kylo-ren": "first-order"
};

module.exports = mergeSubjectPackage({
    subjectDir: path.join(__dirname),
    meta: {
        id: "star-wars",
        name: "Star Wars",
        rootSlug: "star-wars",
        theme: "star-wars",
        copyright: {
            title: "STAR WARS is not owned by Ton-o-Lore.",
            body:
                "STAR WARS and all related characters, names, marks, and images are trademarks of Lucasfilm Ltd. and/or Disney. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by Lucasfilm, Disney, or their rights holders. Identification thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork. Character details and identification thumbs may be sourced from Wookieepedia (starwars.fandom.com)."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: ALIASES,
    parents: PARENTS
});
