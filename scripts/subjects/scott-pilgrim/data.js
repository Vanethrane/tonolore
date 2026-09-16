/**
 * Seed graph for Scott Pilgrim (Comics & manga).
 */

const entities = [
    {
        slug: "scott-pilgrim",
        name: "Scott Pilgrim",
        type: "topic",
        short_description: "Video-game fights, Toronto millennials, and O’Malley’s graphic-novel rom-com that crossed into film.",
        description: "Video-game fights, Toronto millennials, and O’Malley’s graphic-novel rom-com that crossed into film. This Ton-o-Lore subject maps people, places, events, and ideas tied to Scott Pilgrim so readers can follow long-tail connections across comics & manga."
    },
    {
        slug: "scott-pilgrim-figures",
        name: "Scott Pilgrim figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Scott Pilgrim.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Scott Pilgrim."
    },
    {
        slug: "scott-pilgrim-world",
        name: "Scott Pilgrim world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Scott Pilgrim.",
        description:
            "Geography, institutions, and periodization that give Scott Pilgrim its encyclopedia shape."
    }
];

const relationships = [
    [
        "scott-pilgrim",
        "scott-pilgrim-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "scott-pilgrim",
        "scott-pilgrim-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
