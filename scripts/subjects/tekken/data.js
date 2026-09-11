/**
 * Seed graph for Tekken (Fighting games).
 */

const entities = [
    {
        slug: "tekken",
        name: "Tekken",
        type: "topic",
        short_description: "The King of Iron Fist Tournament — Mishima drama and 3D fighter mythology.",
        description: "The King of Iron Fist Tournament — Mishima drama and 3D fighter mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Tekken so readers can follow long-tail connections across fighting games."
    },
    {
        slug: "tekken-figures",
        name: "Tekken figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Tekken.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Tekken."
    },
    {
        slug: "tekken-world",
        name: "Tekken world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Tekken.",
        description:
            "Geography, institutions, and periodization that give Tekken its encyclopedia shape."
    }
];

const relationships = [
    [
        "tekken",
        "tekken-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tekken",
        "tekken-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
