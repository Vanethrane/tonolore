/**
 * Seed graph for The Exorcist (Horror).
 */

const entities = [
    {
        slug: "the-exorcist",
        name: "The Exorcist",
        type: "topic",
        short_description: "Possession cinema and Catholic dread that still set the possession-horror template.",
        description: "Possession cinema and Catholic dread that still set the possession-horror template. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Exorcist so readers can follow long-tail connections across horror."
    },
    {
        slug: "the-exorcist-figures",
        name: "The Exorcist figures",
        type: "topic",
        short_description: "People, characters, and named forces central to The Exorcist.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Exorcist."
    },
    {
        slug: "the-exorcist-world",
        name: "The Exorcist world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame The Exorcist.",
        description:
            "Geography, institutions, and periodization that give The Exorcist its encyclopedia shape."
    }
];

const relationships = [
    [
        "the-exorcist",
        "the-exorcist-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-exorcist",
        "the-exorcist-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
