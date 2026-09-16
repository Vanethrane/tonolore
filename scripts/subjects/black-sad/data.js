/**
 * Seed graph for Blacksad (Comics & manga).
 */

const entities = [
    {
        slug: "black-sad",
        name: "Blacksad",
        type: "topic",
        short_description: "Anthropomorphic noir, John Blacksad, and the Franco-Belgian detective albums of Canales/Guarnido.",
        description: "Anthropomorphic noir, John Blacksad, and the Franco-Belgian detective albums of Canales/Guarnido. This Ton-o-Lore subject maps people, places, events, and ideas tied to Blacksad so readers can follow long-tail connections across comics & manga."
    },
    {
        slug: "black-sad-figures",
        name: "Blacksad figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Blacksad.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Blacksad."
    },
    {
        slug: "black-sad-world",
        name: "Blacksad world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Blacksad.",
        description:
            "Geography, institutions, and periodization that give Blacksad its encyclopedia shape."
    }
];

const relationships = [
    [
        "black-sad",
        "black-sad-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "black-sad",
        "black-sad-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
