/**
 * Seed graph for World War II (History).
 */

const entities = [
    {
        slug: "world-war-ii",
        name: "World War II",
        type: "topic",
        short_description: "Theatres, alliances, and technologies of the mid-20th-century global war.",
        description: "Theatres, alliances, and technologies of the mid-20th-century global war. This Ton-o-Lore subject maps people, places, events, and ideas tied to World War II so readers can follow long-tail connections across history."
    },
    {
        slug: "world-war-ii-figures",
        name: "World War II figures",
        type: "topic",
        short_description: "People, characters, and named forces central to World War II.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring World War II."
    },
    {
        slug: "world-war-ii-world",
        name: "World War II world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame World War II.",
        description:
            "Geography, institutions, and periodization that give World War II its encyclopedia shape."
    }
];

const relationships = [
    [
        "world-war-ii",
        "world-war-ii-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "world-war-ii",
        "world-war-ii-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
