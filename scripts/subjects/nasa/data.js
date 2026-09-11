/**
 * Seed graph for NASA (Science & nature).
 */

const entities = [
    {
        slug: "nasa",
        name: "NASA",
        type: "topic",
        short_description: "Missions, centers, and spacecraft that map the public story of U.S. spaceflight.",
        description: "Missions, centers, and spacecraft that map the public story of U.S. spaceflight. This Ton-o-Lore subject maps people, places, events, and ideas tied to NASA so readers can follow long-tail connections across science & nature."
    },
    {
        slug: "nasa-figures",
        name: "NASA figures",
        type: "topic",
        short_description: "People, characters, and named forces central to NASA.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring NASA."
    },
    {
        slug: "nasa-world",
        name: "NASA world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame NASA.",
        description:
            "Geography, institutions, and periodization that give NASA its encyclopedia shape."
    }
];

const relationships = [
    [
        "nasa",
        "nasa-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "nasa",
        "nasa-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
