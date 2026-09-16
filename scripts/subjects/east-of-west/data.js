/**
 * Seed graph for East of West (Comics & manga).
 */

const entities = [
    {
        slug: "east-of-west",
        name: "East of West",
        type: "topic",
        short_description: "Apocalypse Western sci-fi, Four Horsemen, and Hickman/Dragotta’s fractured America epic.",
        description: "Apocalypse Western sci-fi, Four Horsemen, and Hickman/Dragotta’s fractured America epic. This Ton-o-Lore subject maps people, places, events, and ideas tied to East of West so readers can follow long-tail connections across comics & manga."
    },
    {
        slug: "east-of-west-figures",
        name: "East of West figures",
        type: "topic",
        short_description: "People, characters, and named forces central to East of West.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring East of West."
    },
    {
        slug: "east-of-west-world",
        name: "East of West world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame East of West.",
        description:
            "Geography, institutions, and periodization that give East of West its encyclopedia shape."
    }
];

const relationships = [
    [
        "east-of-west",
        "east-of-west-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "east-of-west",
        "east-of-west-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
