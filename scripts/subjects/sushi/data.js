/**
 * Seed graph for Sushi (Food & drink).
 */

const entities = [
    {
        slug: "sushi",
        name: "Sushi",
        type: "topic",
        short_description: "Vinegared rice cuisine — regional styles, craft lineages, and global adaptation.",
        description: "Vinegared rice cuisine — regional styles, craft lineages, and global adaptation. This Ton-o-Lore subject maps people, places, events, and ideas tied to Sushi so readers can follow long-tail connections across food & drink."
    },
    {
        slug: "sushi-figures",
        name: "Sushi figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Sushi.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Sushi."
    },
    {
        slug: "sushi-world",
        name: "Sushi world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Sushi.",
        description:
            "Geography, institutions, and periodization that give Sushi its encyclopedia shape."
    }
];

const relationships = [
    [
        "sushi",
        "sushi-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sushi",
        "sushi-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
