/**
 * Seed graph for Foundation (Science fiction).
 */

const entities = [
    {
        slug: "foundation-series",
        name: "Foundation",
        type: "topic",
        short_description: "Psychohistory, empires, and Asimov's long-arc future history across books and screen.",
        description: "Psychohistory, empires, and Asimov's long-arc future history across books and screen. This Ton-o-Lore subject maps people, places, events, and ideas tied to Foundation so readers can follow long-tail connections across science fiction."
    },
    {
        slug: "foundation-series-figures",
        name: "Foundation figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Foundation.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Foundation."
    },
    {
        slug: "foundation-series-world",
        name: "Foundation world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Foundation.",
        description:
            "Geography, institutions, and periodization that give Foundation its encyclopedia shape."
    }
];

const relationships = [
    [
        "foundation-series",
        "foundation-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "foundation-series",
        "foundation-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
