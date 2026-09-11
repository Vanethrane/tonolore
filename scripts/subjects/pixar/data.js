/**
 * Seed graph for Pixar (Western animation).
 */

const entities = [
    {
        slug: "pixar",
        name: "Pixar",
        type: "topic",
        short_description: "Studio storytelling worlds — toys, monsters, cars, and emotional architecture in CGI.",
        description: "Studio storytelling worlds — toys, monsters, cars, and emotional architecture in CGI. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pixar so readers can follow long-tail connections across western animation."
    },
    {
        slug: "pixar-figures",
        name: "Pixar figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Pixar.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pixar."
    },
    {
        slug: "pixar-world",
        name: "Pixar world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Pixar.",
        description:
            "Geography, institutions, and periodization that give Pixar its encyclopedia shape."
    }
];

const relationships = [
    [
        "pixar",
        "pixar-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pixar",
        "pixar-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
