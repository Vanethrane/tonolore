/**
 * Seed graph for Wine (Food & drink).
 */

const entities = [
    {
        slug: "wine",
        name: "Wine",
        type: "topic",
        short_description: "Terroir, appellations, and tasting cultures that organize wine as living geography.",
        description: "Terroir, appellations, and tasting cultures that organize wine as living geography. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wine so readers can follow long-tail connections across food & drink."
    },
    {
        slug: "wine-figures",
        name: "Wine figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Wine.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Wine."
    },
    {
        slug: "wine-world",
        name: "Wine world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Wine.",
        description:
            "Geography, institutions, and periodization that give Wine its encyclopedia shape."
    }
];

const relationships = [
    [
        "wine",
        "wine-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wine",
        "wine-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
