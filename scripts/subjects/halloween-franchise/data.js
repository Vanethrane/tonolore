/**
 * Seed graph for Halloween (Horror).
 */

const entities = [
    {
        slug: "halloween-franchise",
        name: "Halloween",
        type: "topic",
        short_description: "Michael Myers and Haddonfield — the slasher calendar's most durable myth.",
        description: "Michael Myers and Haddonfield — the slasher calendar's most durable myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Halloween so readers can follow long-tail connections across horror."
    },
    {
        slug: "halloween-franchise-figures",
        name: "Halloween figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Halloween.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Halloween."
    },
    {
        slug: "halloween-franchise-world",
        name: "Halloween world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Halloween.",
        description:
            "Geography, institutions, and periodization that give Halloween its encyclopedia shape."
    }
];

const relationships = [
    [
        "halloween-franchise",
        "halloween-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "halloween-franchise",
        "halloween-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
