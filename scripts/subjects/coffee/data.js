/**
 * Seed graph for Coffee (Food & drink).
 */

const entities = [
    {
        slug: "coffee",
        name: "Coffee",
        type: "topic",
        short_description: "Beans, brewing traditions, and café cultures from origin to specialty.",
        description: "Beans, brewing traditions, and café cultures from origin to specialty. This Ton-o-Lore subject maps people, places, events, and ideas tied to Coffee so readers can follow long-tail connections across food & drink."
    },
    {
        slug: "coffee-figures",
        name: "Coffee figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Coffee.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Coffee."
    },
    {
        slug: "coffee-world",
        name: "Coffee world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Coffee.",
        description:
            "Geography, institutions, and periodization that give Coffee its encyclopedia shape."
    }
];

const relationships = [
    [
        "coffee",
        "coffee-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "coffee",
        "coffee-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
