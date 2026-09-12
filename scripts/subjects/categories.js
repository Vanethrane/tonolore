/**
 * Home-page media categories for Ton-o-Lore subjects.
 * Packages may set meta.categories; otherwise SUBJECT_CATEGORY_IDS is used.
 */

const {
    MUSIC_GENRES,
    musicSubjectIds,
    genreIdForSubject
} = require("./musicCatalog");
const {
    CARD_GAME_SUBJECTS,
    BOARD_GAME_SUBJECTS,
    TABLETOP_SHELVES,
    newCardGameSubjectIds,
    boardGameSubjectIds
} = require("./tabletopCardCatalog");
const {
    categoryEntriesForCatalog,
    expansionSubjectIds,
    subjectCategoryMap
} = require("./expansionCatalog");
const {
    sportsSubjectIds,
    sportsShelvesForCatalog,
    subjectCategoryMap: sportsCategoryMap,
    sportIdForSubject
} = require("./sportsCatalog");

const CATEGORY_CATALOG = [
    {
        id: "anime",
        label: "Anime",
        blurb: "Series, studios, and story worlds that moved from the page to the screen."
    },
    {
        id: "video-games",
        label: "Video games",
        blurb: "Interactive worlds, studios, and the characters that fill them."
    },
    {
        id: "books",
        label: "Books & literature",
        blurb: "Novels, sagas, and literary universes with deep canon trails."
    },
    {
        id: "movies",
        label: "Movies",
        blurb: "Film franchises, directors, and the lore that spilled off the screen."
    },
    {
        id: "television",
        label: "Television",
        blurb: "Long-form shows and serial worlds built episode by episode."
    },
    {
        id: "comics",
        label: "Comics & manga",
        blurb: "Panels, publishers, and the heroes drawn across decades."
    },
    {
        id: "tabletop",
        label: "Tabletop",
        blurb: "RPGs, wargames, and board games shaped at the table.",
        genres: TABLETOP_SHELVES.map((shelf) => ({
            id: shelf.id,
            label: shelf.label,
            blurb: shelf.blurb,
            subjectIds: shelf.subjectIds
        }))
    },
    {
        id: "card-games",
        label: "Card games",
        blurb: "Trading and living card games — including franchises that cross from anime, games, and comics."
    },
    {
        id: "music",
        label: "Music",
        blurb: "Artists, catalogs, and scenes mapped by genre — follow the lore behind the songs.",
        genres: MUSIC_GENRES.map((genre) => ({
            id: genre.id,
            label: genre.label,
            blurb: genre.blurb,
            subjectIds: genre.subjects.map((subject) => subject.id)
        }))
    },
    {
        id: "sports",
        label: "Sports",
        blurb: "Leagues, tournaments, and ritual competition — browse by sport.",
        genres: sportsShelvesForCatalog()
    },
    ...categoryEntriesForCatalog()
];

const SUBJECT_CATEGORY_IDS = {
    "one-piece": ["comics", "anime", "television", "card-games"],
    "star-wars": ["movies", "television", "video-games"],
    "five-nights-at-freddys": ["video-games"],
    "harry-potter": ["books", "movies"],
    pokemon: ["video-games", "anime", "movies", "card-games"],
    "lord-of-the-rings": ["books", "movies"],
    cosmere: ["books"],
    "dragon-ball": ["comics", "anime", "movies", "card-games"],
    "wheel-of-time": ["books", "television"],
    berserk: ["comics"],
    marvel: ["comics", "movies"],
    dc: ["comics", "movies"],
    "spider-man": ["comics", "movies"],
    mario: ["video-games"],
    transformers: ["television", "movies", "video-games"],
    "game-of-thrones": ["books", "television"],
    "the-simpsons": ["television"],
    naruto: ["comics", "anime"],
    "demon-slayer": ["comics", "anime"],
    "attack-on-titan": ["comics", "anime"],
    minecraft: ["video-games"],
    "the-legend-of-zelda": ["video-games"],
    "jurassic-park": ["movies"],
    "james-bond": ["movies"],
    "warhammer-40k": ["tabletop", "video-games"],
    "elder-scrolls": ["video-games"],
    "world-of-warcraft": ["video-games"],
    "final-fantasy": ["video-games", "card-games"],
    fallout: ["video-games"],
    destiny: ["video-games"],
    "doctor-who": ["television"],
    dune: ["books", "movies"],
    "the-witcher": ["books", "video-games", "television"],
    "mass-effect": ["video-games"],
    "chainsaw-man": ["comics", "anime"],
    "jojos-bizarre-adventure": ["comics", "anime"],
    invincible: ["comics", "television"],
    "teenage-mutant-ninja-turtles": ["comics", "television", "movies"],
    "dungeons-and-dragons": ["tabletop", "books"],
    "magic-the-gathering": ["tabletop", "card-games"],
    pathfinder: ["tabletop"],
    "warhammer-fantasy": ["tabletop"],
    "vampire-the-masquerade": ["tabletop", "books", "television"],
    battletech: ["tabletop", "video-games"],
    "call-of-cthulhu": ["tabletop", "books"],
    ...Object.fromEntries(musicSubjectIds().map((id) => [id, ["music"]])),
    ...Object.fromEntries(
        newCardGameSubjectIds().map((id) => [id, ["card-games"]])
    ),
    ...Object.fromEntries(
        boardGameSubjectIds().map((id) => [id, ["tabletop"]])
    ),
    ...sportsCategoryMap(),
    ...subjectCategoryMap()
};

function normalizeCategories(value) {
    if (!Array.isArray(value)) {
        return [];
    }

    const known = new Set(CATEGORY_CATALOG.map((category) => category.id));
    return [
        ...new Set(
            value
                .map((entry) => String(entry || "").trim())
                .filter((id) => known.has(id))
        )
    ];
}

function categoriesForSubject(id, fromPackage) {
    const fromMeta = normalizeCategories(fromPackage);
    if (fromMeta.length) {
        return fromMeta;
    }

    return normalizeCategories(SUBJECT_CATEGORY_IDS[id] || []);
}

module.exports = {
    CATEGORY_CATALOG,
    SUBJECT_CATEGORY_IDS,
    MUSIC_GENRES,
    CARD_GAME_SUBJECTS,
    BOARD_GAME_SUBJECTS,
    TABLETOP_SHELVES,
    categoriesForSubject,
    normalizeCategories,
    genreIdForSubject,
    musicSubjectIds,
    newCardGameSubjectIds,
    boardGameSubjectIds,
    expansionSubjectIds,
    sportsSubjectIds,
    sportIdForSubject
};
