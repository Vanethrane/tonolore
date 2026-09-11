/**
 * Seed graph for Hamilton (Theater & musicals).
 */

const entities = [
    {
        slug: "hamilton",
        name: "Hamilton",
        type: "topic",
        short_description: "The hip-hop history musical that remixed Founding-era biography for the stage.",
        description: "The hip-hop history musical that remixed Founding-era biography for the stage. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hamilton so readers can follow long-tail connections across theater & musicals."
    },
    {
        slug: "hamilton-figures",
        name: "Hamilton figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Hamilton.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hamilton."
    },
    {
        slug: "hamilton-world",
        name: "Hamilton world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Hamilton.",
        description:
            "Geography, institutions, and periodization that give Hamilton its encyclopedia shape."
    }
];

const relationships = [
    [
        "hamilton",
        "hamilton-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hamilton",
        "hamilton-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
