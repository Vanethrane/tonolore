/**
 * Seed graph for Adventure Time (Western animation).
 */

const entities = [
    {
        slug: "adventure-time",
        name: "Adventure Time",
        type: "topic",
        short_description: "Ooo's post-apocalyptic candy kingdoms and emotional lore across a sprawling series.",
        description: "Ooo's post-apocalyptic candy kingdoms and emotional lore across a sprawling series. This Ton-o-Lore subject maps people, places, events, and ideas tied to Adventure Time so readers can follow long-tail connections across western animation."
    },
    {
        slug: "adventure-time-figures",
        name: "Adventure Time figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Adventure Time.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Adventure Time."
    },
    {
        slug: "adventure-time-world",
        name: "Adventure Time world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Adventure Time.",
        description:
            "Geography, institutions, and periodization that give Adventure Time its encyclopedia shape."
    }
];

const relationships = [
    [
        "adventure-time",
        "adventure-time-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "adventure-time",
        "adventure-time-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
