/**
 * Seed graph for Locke & Key (Comics & manga).
 */

const entities = [
    {
        slug: "locke-and-key-comics",
        name: "Locke & Key",
        type: "topic",
        short_description: "Keyhouse magic, grief horror, and Hill/Rodriguez’s fantasy mystery comic.",
        description: "Keyhouse magic, grief horror, and Hill/Rodriguez’s fantasy mystery comic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Locke & Key so readers can follow long-tail connections across comics & manga."
    },
    {
        slug: "locke-and-key-comics-figures",
        name: "Locke & Key figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Locke & Key.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Locke & Key."
    },
    {
        slug: "locke-and-key-comics-world",
        name: "Locke & Key world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Locke & Key.",
        description:
            "Geography, institutions, and periodization that give Locke & Key its encyclopedia shape."
    }
];

const relationships = [
    [
        "locke-and-key-comics",
        "locke-and-key-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "locke-and-key-comics",
        "locke-and-key-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
