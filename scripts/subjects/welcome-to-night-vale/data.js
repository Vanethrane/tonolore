/**
 * Seed graph for Welcome to Night Vale (Podcasts & audio).
 */

const entities = [
    {
        slug: "welcome-to-night-vale",
        name: "Welcome to Night Vale",
        type: "topic",
        short_description: "A desert community radio fiction of conspiracies, angels, and small-town weird.",
        description: "A desert community radio fiction of conspiracies, angels, and small-town weird. This Ton-o-Lore subject maps people, places, events, and ideas tied to Welcome to Night Vale so readers can follow long-tail connections across podcasts & audio."
    },
    {
        slug: "welcome-to-night-vale-figures",
        name: "Welcome to Night Vale figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Welcome to Night Vale.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Welcome to Night Vale."
    },
    {
        slug: "welcome-to-night-vale-world",
        name: "Welcome to Night Vale world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Welcome to Night Vale.",
        description:
            "Geography, institutions, and periodization that give Welcome to Night Vale its encyclopedia shape."
    }
];

const relationships = [
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
