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
const { sportsSubjectIds } = require("./sportsCatalog");
const { depthFillSubjectIds } = require("./categoryDepthFillers");
const {
    categoryPathsForSubject,
    formatHubSummaries
} = require("./formatHubs");
const { applyFormatHubs } = require("../lib/applyFormatHubs");

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
    ...sportsSubjectIds(),
    ...expansionSubjectIds(),
    // Core-shelf depth fillers (anime/movies/etc.) not already covered above.
    ...depthFillSubjectIds().filter((id) => {
        // expansionSubjectIds already includes expansion-depth fillers.
        return true;
    })
];

// Deduplicate while preserving order.
const _seenIds = new Set();
const SUBJECT_IDS_UNIQUE = SUBJECT_IDS.filter((id) => {
    if (_seenIds.has(id)) {
        return false;
    }
    _seenIds.add(id);
    return true;
});

function loadSubject(id) {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const subject = require(path.join(__dirname, id));
    return applyFormatHubs(subject);
}

function listSubjectMeta() {
    return SUBJECT_IDS_UNIQUE.map((id) => {
        const subject = loadSubject(id);
        const rootSlug = subject.rootSlug || id;
        return {
            id: subject.id,
            name: subject.name,
            rootSlug,
            theme: subject.theme || subject.id,
            copyright: subject.copyright || null,
            logo: subject.logo || SUBJECT_LOGOS[id] || null,
            categories: categoriesForSubject(id, subject.categories),
            musicGenre: subject.musicGenre || null,
            sportsSport: subject.sportsSport || null,
            categoryPaths:
                subject.categoryPaths ||
                categoryPathsForSubject(id, rootSlug),
            formatHubs: subject.formatHubs || formatHubSummaries(id, rootSlug)
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
    SUBJECT_IDS: SUBJECT_IDS_UNIQUE,
    CATEGORY_CATALOG,
    loadSubject,
    listSubjectMeta,
    getSubjectMeta
};
