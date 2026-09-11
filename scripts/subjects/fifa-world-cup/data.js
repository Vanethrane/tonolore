/**
 * Seed graph for FIFA World Cup (Sports).
 */

const entities = [
    {
        slug: "fifa-world-cup",
        name: "FIFA World Cup",
        type: "topic",
        short_description: "The quadrennial football tournament that remaps national sporting identity.",
        description: "The quadrennial football tournament that remaps national sporting identity. This Ton-o-Lore subject maps people, places, events, and ideas tied to FIFA World Cup so readers can follow long-tail connections across sports."
    },
    {
        slug: "fifa-world-cup-figures",
        name: "FIFA World Cup figures",
        type: "topic",
        short_description: "People, characters, and named forces central to FIFA World Cup.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring FIFA World Cup."
    },
    {
        slug: "fifa-world-cup-world",
        name: "FIFA World Cup world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame FIFA World Cup.",
        description:
            "Geography, institutions, and periodization that give FIFA World Cup its encyclopedia shape."
    }
];

const relationships = [
    [
        "fifa-world-cup",
        "fifa-world-cup-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
