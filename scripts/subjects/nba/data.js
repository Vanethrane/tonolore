/**
 * Seed graph for NBA (Sports).
 */

const entities = [
    {
        slug: "nba",
        name: "NBA",
        type: "topic",
        short_description: "The National Basketball Association — franchises, eras, and court mythology.",
        description: "The National Basketball Association — franchises, eras, and court mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to NBA so readers can follow long-tail connections across sports."
    },
    {
        slug: "nba-figures",
        name: "NBA figures",
        type: "topic",
        short_description: "People, characters, and named forces central to NBA.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring NBA."
    },
    {
        slug: "nba-world",
        name: "NBA world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame NBA.",
        description:
            "Geography, institutions, and periodization that give NBA its encyclopedia shape."
    }
];

const relationships = [
    [
        "nba",
        "nba-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "nba",
        "nba-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
