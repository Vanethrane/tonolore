/**
 * Seed graph for Wikipedia (Internet culture).
 */

const entities = [
    {
        slug: "wikipedia",
        name: "Wikipedia",
        type: "topic",
        short_description: "The collaborative encyclopedia — policies, projects, and knowledge-graph culture.",
        description: "The collaborative encyclopedia — policies, projects, and knowledge-graph culture. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wikipedia so readers can follow long-tail connections across internet culture."
    },
    {
        slug: "wikipedia-figures",
        name: "Wikipedia figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Wikipedia.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Wikipedia."
    },
    {
        slug: "wikipedia-world",
        name: "Wikipedia world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Wikipedia.",
        description:
            "Geography, institutions, and periodization that give Wikipedia its encyclopedia shape."
    }
];

const relationships = [
    [
        "wikipedia",
        "wikipedia-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wikipedia",
        "wikipedia-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
