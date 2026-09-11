/**
 * Seed graph for Robin Hood (Folklore & legend).
 */

const entities = [
    {
        slug: "robin-hood",
        name: "Robin Hood",
        type: "topic",
        short_description: "Sherwood outlawry, merry men, and redistribution myths in English folklore.",
        description: "Sherwood outlawry, merry men, and redistribution myths in English folklore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Robin Hood so readers can follow long-tail connections across folklore & legend."
    },
    {
        slug: "robin-hood-figures",
        name: "Robin Hood figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Robin Hood.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Robin Hood."
    },
    {
        slug: "robin-hood-world",
        name: "Robin Hood world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Robin Hood.",
        description:
            "Geography, institutions, and periodization that give Robin Hood its encyclopedia shape."
    }
];

const relationships = [
    [
        "robin-hood",
        "robin-hood-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "robin-hood",
        "robin-hood-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
