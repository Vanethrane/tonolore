/**
 * Seed graph for YouTube (Internet culture).
 */

const entities = [
    {
        slug: "youtube",
        name: "YouTube",
        type: "topic",
        short_description: "Creator economies, genres, and platform lore from vlogs to algorithmic fame.",
        description: "Creator economies, genres, and platform lore from vlogs to algorithmic fame. This Ton-o-Lore subject maps people, places, events, and ideas tied to YouTube so readers can follow long-tail connections across internet culture."
    },
    {
        slug: "youtube-figures",
        name: "YouTube figures",
        type: "topic",
        short_description: "People, characters, and named forces central to YouTube.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring YouTube."
    },
    {
        slug: "youtube-world",
        name: "YouTube world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame YouTube.",
        description:
            "Geography, institutions, and periodization that give YouTube its encyclopedia shape."
    }
];

const relationships = [
    [
        "youtube",
        "youtube-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "youtube",
        "youtube-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
