/**
 * Seed graph for NJPW (Pro wrestling).
 */

const entities = [
    {
        slug: "njpw",
        name: "NJPW",
        type: "topic",
        short_description: "New Japan's strong style — IWGP lineages, factions, and international crossovers.",
        description: "New Japan's strong style — IWGP lineages, factions, and international crossovers. This Ton-o-Lore subject maps people, places, events, and ideas tied to NJPW so readers can follow long-tail connections across pro wrestling."
    },
    {
        slug: "njpw-figures",
        name: "NJPW figures",
        type: "topic",
        short_description: "People, characters, and named forces central to NJPW.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring NJPW."
    },
    {
        slug: "njpw-world",
        name: "NJPW world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame NJPW.",
        description:
            "Geography, institutions, and periodization that give NJPW its encyclopedia shape."
    }
];

const relationships = [
    [
        "njpw",
        "njpw-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "njpw",
        "njpw-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
