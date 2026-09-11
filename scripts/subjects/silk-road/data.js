/**
 * Seed graph for Silk Road (History).
 */

const entities = [
    {
        slug: "silk-road",
        name: "Silk Road",
        type: "topic",
        short_description: "Overland and maritime corridors that moved goods, faiths, and stories across Eurasia.",
        description: "Overland and maritime corridors that moved goods, faiths, and stories across Eurasia. This Ton-o-Lore subject maps people, places, events, and ideas tied to Silk Road so readers can follow long-tail connections across history."
    },
    {
        slug: "silk-road-figures",
        name: "Silk Road figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Silk Road.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Silk Road."
    },
    {
        slug: "silk-road-world",
        name: "Silk Road world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Silk Road.",
        description:
            "Geography, institutions, and periodization that give Silk Road its encyclopedia shape."
    }
];

const relationships = [
    [
        "silk-road",
        "silk-road-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "silk-road",
        "silk-road-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
