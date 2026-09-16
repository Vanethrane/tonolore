/**
 * Seed graph for AEW (Pro wrestling).
 */

const entities = [
    {
        slug: "aew",
        name: "AEW",
        type: "topic",
        short_description: "All Elite Wrestling — factions, PPV mythmaking, and the modern U.S. alternative.",
        description: "All Elite Wrestling — factions, PPV mythmaking, and the modern U.S. alternative. This Ton-o-Lore subject maps people, places, events, and ideas tied to AEW so readers can follow long-tail connections across pro wrestling."
    },
    {
        slug: "aew-figures",
        name: "AEW figures",
        type: "topic",
        short_description: "People, characters, and named forces central to AEW.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring AEW."
    },
    {
        slug: "aew-world",
        name: "AEW world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame AEW.",
        description:
            "Geography, institutions, and periodization that give AEW its encyclopedia shape."
    }
];

const relationships = [
    [
        "aew",
        "aew-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "aew",
        "aew-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
