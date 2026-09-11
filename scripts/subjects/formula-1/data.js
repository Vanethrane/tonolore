/**
 * Seed graph for Formula 1 (Sports).
 */

const entities = [
    {
        slug: "formula-1",
        name: "Formula 1",
        type: "topic",
        short_description: "Grand Prix racing — constructors, circuits, and technical eras at the limit.",
        description: "Grand Prix racing — constructors, circuits, and technical eras at the limit. This Ton-o-Lore subject maps people, places, events, and ideas tied to Formula 1 so readers can follow long-tail connections across sports."
    },
    {
        slug: "formula-1-figures",
        name: "Formula 1 figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Formula 1.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Formula 1."
    },
    {
        slug: "formula-1-world",
        name: "Formula 1 world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Formula 1.",
        description:
            "Geography, institutions, and periodization that give Formula 1 its encyclopedia shape."
    }
];

const relationships = [
    [
        "formula-1",
        "formula-1-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "formula-1",
        "formula-1-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
