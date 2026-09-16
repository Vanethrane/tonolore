/**
 * Seed graph for Mortal Kombat (Fighting games).
 */

const entities = [
    {
        slug: "mortal-kombat",
        name: "Mortal Kombat",
        type: "topic",
        short_description: "Outworld tournaments, fatalities, and decades of multiverse reboot lore.",
        description: "Outworld tournaments, fatalities, and decades of multiverse reboot lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mortal Kombat so readers can follow long-tail connections across fighting games."
    },
    {
        slug: "mortal-kombat-figures",
        name: "Mortal Kombat figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Mortal Kombat.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mortal Kombat."
    },
    {
        slug: "mortal-kombat-world",
        name: "Mortal Kombat world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Mortal Kombat.",
        description:
            "Geography, institutions, and periodization that give Mortal Kombat its encyclopedia shape."
    }
];

const relationships = [
    [
        "mortal-kombat",
        "mortal-kombat-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mortal-kombat",
        "mortal-kombat-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
