/**
 * Subject registry shared by seeds, page generation, and the API.
 * Every subject must define theme + copyright here (or in its package).
 */

const path = require("path");
const SUBJECT_LOGOS = require("./logos");
const {
    CATEGORY_CATALOG,
    categoriesForSubject
} = require("./categories");
const { musicSubjectIds } = require("./musicCatalog");
const {
    newCardGameSubjectIds,
    boardGameSubjectIds
} = require("./tabletopCardCatalog");
const { expansionSubjectIds } = require("./expansionCatalog");

const SUBJECT_IDS = [
    "one-piece",
    "star-wars",
    "five-nights-at-freddys",
    "harry-potter",
    "pokemon",
    "lord-of-the-rings",
    "cosmere",
    "dragon-ball",
    "wheel-of-time",
    "berserk",
    "marvel",
    "dc",
    "spider-man",
    "mario",
    "transformers",
    "game-of-thrones",
    "the-simpsons",
    "naruto",
    "demon-slayer",
    "attack-on-titan",
    "minecraft",
    "the-legend-of-zelda",
    "jurassic-park",
    "james-bond",
    "warhammer-40k",
    "elder-scrolls",
    "world-of-warcraft",
    "final-fantasy",
    "fallout",
    "destiny",
    "doctor-who",
    "dune",
    "the-witcher",
    "mass-effect",
    "chainsaw-man",
    "jojos-bizarre-adventure",
    "invincible",
    "teenage-mutant-ninja-turtles",
    "dungeons-and-dragons",
    "magic-the-gathering",
    "pathfinder",
    "warhammer-fantasy",
    "vampire-the-masquerade",
    "battletech",
    "call-of-cthulhu",
    ...musicSubjectIds(),
    ...newCardGameSubjectIds(),
    ...boardGameSubjectIds(),
    ...expansionSubjectIds()
];

function loadSubject(id) {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(path.join(__dirname, id));
}

function listSubjectMeta() {
    return SUBJECT_IDS.map((id) => {
        const subject = loadSubject(id);
        return {
            id: subject.id,
            name: subject.name,
            rootSlug: subject.rootSlug,
            theme: subject.theme || subject.id,
            copyright: subject.copyright || null,
            logo: subject.logo || SUBJECT_LOGOS[id] || null,
            categories: categoriesForSubject(id, subject.categories),
            musicGenre: subject.musicGenre || null
        };
    });
}

function getSubjectMeta(idOrTheme) {
    if (!idOrTheme) {
        return null;
    }

    return (
        listSubjectMeta().find(
            (subject) =>
                subject.id === idOrTheme || subject.theme === idOrTheme
        ) || null
    );
}

module.exports = {
    SUBJECT_IDS,
    CATEGORY_CATALOG,
    loadSubject,
    listSubjectMeta,
    getSubjectMeta
};
