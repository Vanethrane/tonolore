/**
 * Home-page media categories for Ton-o-Lore subjects.
 * Packages may set meta.categories; otherwise SUBJECT_CATEGORY_IDS is used.
 */

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
        blurb: "RPGs, wargames, and card worlds shaped at the table."
    }
];

const SUBJECT_CATEGORY_IDS = {
    "one-piece": ["anime"],
    "star-wars": ["movies", "television"],
    "five-nights-at-freddys": ["video-games"],
    "harry-potter": ["books", "movies"],
    pokemon: ["video-games", "anime"],
    "lord-of-the-rings": ["books", "movies"],
    cosmere: ["books"],
    "dragon-ball": ["anime"],
    "wheel-of-time": ["books", "television"],
    berserk: ["comics"],
    marvel: ["comics", "movies"],
    dc: ["comics", "movies"],
    "spider-man": ["comics", "movies"],
    mario: ["video-games"],
    transformers: ["television", "movies"],
    "game-of-thrones": ["books", "television"],
    "the-simpsons": ["television"],
    naruto: ["anime"],
    "demon-slayer": ["anime"],
    "attack-on-titan": ["anime"],
    minecraft: ["video-games"],
    "the-legend-of-zelda": ["video-games"],
    "jurassic-park": ["movies"],
    "james-bond": ["movies"],
    "warhammer-40k": ["tabletop", "video-games"],
    "elder-scrolls": ["video-games"],
    "world-of-warcraft": ["video-games"],
    "final-fantasy": ["video-games"],
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
    "magic-the-gathering": ["tabletop"],
    pathfinder: ["tabletop"],
    "warhammer-fantasy": ["tabletop"],
    "vampire-the-masquerade": ["tabletop", "books", "television"],
    battletech: ["tabletop", "video-games"],
    "call-of-cthulhu": ["tabletop", "books"]
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
    categoriesForSubject,
    normalizeCategories
};
