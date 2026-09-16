/**
 * Seed graph for Ancient Rome (History).
 */

const entities = [
    {
        slug: "ancient-rome",
        name: "Ancient Rome",
        type: "topic",
        short_description: "Republic to empire — senators, legions, and cities that still organize civic myth.",
        description: "Republic to empire — senators, legions, and cities that still organize civic myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ancient Rome so readers can follow long-tail connections across history."
    },
    {
        slug: "ancient-rome-figures",
        name: "Ancient Rome figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Ancient Rome.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ancient Rome."
    },
    {
        slug: "ancient-rome-world",
        name: "Ancient Rome world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Ancient Rome.",
        description:
            "Geography, institutions, and periodization that give Ancient Rome its encyclopedia shape."
    }
];

const relationships = [
    [
        "ancient-rome",
        "ancient-rome-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ancient-rome",
        "ancient-rome-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
