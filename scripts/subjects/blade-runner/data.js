/**
 * Seed graph for Blade Runner (Science fiction).
 */

const entities = [
    {
        slug: "blade-runner",
        name: "Blade Runner",
        type: "topic",
        short_description: "Replicants, neon noir, and Philip K. Dick-rooted futures of memory and personhood.",
        description: "Replicants, neon noir, and Philip K. Dick-rooted futures of memory and personhood. This Ton-o-Lore subject maps people, places, events, and ideas tied to Blade Runner so readers can follow long-tail connections across science fiction."
    },
    {
        slug: "blade-runner-figures",
        name: "Blade Runner figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Blade Runner.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Blade Runner."
    },
    {
        slug: "blade-runner-world",
        name: "Blade Runner world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Blade Runner.",
        description:
            "Geography, institutions, and periodization that give Blade Runner its encyclopedia shape."
    }
];

const relationships = [
    [
        "blade-runner",
        "blade-runner-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "blade-runner",
        "blade-runner-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
