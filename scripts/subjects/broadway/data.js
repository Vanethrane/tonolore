/**
 * Seed graph for Broadway (Theater & musicals).
 */

const entities = [
    {
        slug: "broadway",
        name: "Broadway",
        type: "topic",
        short_description: "New York's commercial theatre district — houses, hits, and industry lore.",
        description: "New York's commercial theatre district — houses, hits, and industry lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Broadway so readers can follow long-tail connections across theater & musicals."
    },
    {
        slug: "broadway-figures",
        name: "Broadway figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Broadway.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Broadway."
    },
    {
        slug: "broadway-world",
        name: "Broadway world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Broadway.",
        description:
            "Geography, institutions, and periodization that give Broadway its encyclopedia shape."
    }
];

const relationships = [
    [
        "broadway",
        "broadway-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "broadway",
        "broadway-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
