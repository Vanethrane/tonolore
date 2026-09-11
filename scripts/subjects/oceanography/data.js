/**
 * Seed graph for Oceanography (Science & nature).
 */

const entities = [
    {
        slug: "oceanography",
        name: "Oceanography",
        type: "topic",
        short_description: "Currents, trenches, and vessels that chart the planet's connected seas.",
        description: "Currents, trenches, and vessels that chart the planet's connected seas. This Ton-o-Lore subject maps people, places, events, and ideas tied to Oceanography so readers can follow long-tail connections across science & nature."
    },
    {
        slug: "oceanography-figures",
        name: "Oceanography figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Oceanography.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Oceanography."
    },
    {
        slug: "oceanography-world",
        name: "Oceanography world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Oceanography.",
        description:
            "Geography, institutions, and periodization that give Oceanography its encyclopedia shape."
    }
];

const relationships = [
    [
        "oceanography",
        "oceanography-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "oceanography",
        "oceanography-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
