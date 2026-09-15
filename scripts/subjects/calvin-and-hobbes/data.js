/**
 * Seed graph for Calvin and Hobbes (Comics & manga).
 */

const entities = [
    {
        slug: "calvin-and-hobbes",
        name: "Calvin and Hobbes",
        type: "topic",
        short_description: "Boy and tiger imagination, Sunday-page philosophy, and the newspaper strip that refused merchandising.",
        description: "Boy and tiger imagination, Sunday-page philosophy, and the newspaper strip that refused merchandising. This Ton-o-Lore subject maps people, places, events, and ideas tied to Calvin and Hobbes so readers can follow long-tail connections across comics & manga."
    },
    {
        slug: "calvin-and-hobbes-figures",
        name: "Calvin and Hobbes figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Calvin and Hobbes.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Calvin and Hobbes."
    },
    {
        slug: "calvin-and-hobbes-world",
        name: "Calvin and Hobbes world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Calvin and Hobbes.",
        description:
            "Geography, institutions, and periodization that give Calvin and Hobbes its encyclopedia shape."
    }
];

const relationships = [
    [
        "calvin-and-hobbes",
        "calvin-and-hobbes-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "calvin-and-hobbes",
        "calvin-and-hobbes-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
