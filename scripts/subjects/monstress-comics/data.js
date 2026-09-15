/**
 * Seed graph for Monstress (Comics & manga).
 */

const entities = [
    {
        slug: "monstress-comics",
        name: "Monstress",
        type: "topic",
        short_description: "War-torn matriarchies, ancient monsters, and Liu/Takeda’s lush dark-fantasy Image epic.",
        description: "War-torn matriarchies, ancient monsters, and Liu/Takeda’s lush dark-fantasy Image epic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Monstress so readers can follow long-tail connections across comics & manga."
    },
    {
        slug: "monstress-comics-figures",
        name: "Monstress figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Monstress.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Monstress."
    },
    {
        slug: "monstress-comics-world",
        name: "Monstress world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Monstress.",
        description:
            "Geography, institutions, and periodization that give Monstress its encyclopedia shape."
    }
];

const relationships = [
    [
        "monstress-comics",
        "monstress-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "monstress-comics",
        "monstress-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
