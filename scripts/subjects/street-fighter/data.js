/**
 * Seed graph for Street Fighter (Fighting games).
 */

const entities = [
    {
        slug: "street-fighter",
        name: "Street Fighter",
        type: "topic",
        short_description: "World warriors, combos, and Capcom's flagship fighting-game universe.",
        description: "World warriors, combos, and Capcom's flagship fighting-game universe. This Ton-o-Lore subject maps people, places, events, and ideas tied to Street Fighter so readers can follow long-tail connections across fighting games."
    },
    {
        slug: "street-fighter-figures",
        name: "Street Fighter figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Street Fighter.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Street Fighter."
    },
    {
        slug: "street-fighter-world",
        name: "Street Fighter world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Street Fighter.",
        description:
            "Geography, institutions, and periodization that give Street Fighter its encyclopedia shape."
    }
];

const relationships = [
    [
        "street-fighter",
        "street-fighter-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "street-fighter",
        "street-fighter-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
